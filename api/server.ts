import express from 'express'
import mysql from 'mysql2';
require('dotenv').config();

const port:string | number = process.env.BASE_URL || 3000;
const app: express.Express = express();

/*********************************************
      使用するDBを定義
*********************************************/
export interface DB {
  host: string,
  user: string,
  password: string,
  database: string
}
const DB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

/*********************************************
      DB作成
*********************************************/
const dbCreate: () => void = () => {
  DB.query(`CREATE DATABASE ${process.env.DB_NAME}`, (err:express.Request) => {
    if(err) return;
  })
};

/*********************************************
      テーブル作成
*********************************************/

const tableCreate: () => void = () => {
  // テーブルの作成
  const createTableSql = ` CREATE TABLE IF NOT EXISTS ${process.env.TABLE_NAME} (
    isbn varchar(15) NOT NULL,
    title varchar(100) DEFAULT NULL,
    description text,
    PRIMARY KEY (isbn)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8`;
  DB.query(createTableSql, (err, result) => {
    if(err) console.error(err);
  });
};

/*********************************************
      テーブル内容取得
*********************************************/

const selectTable: () => void = () => {
  const selectTableSql = `SELECT * from ${process.env.TABLE_NAME}`;
  DB.query(selectTableSql, (err, result, fields) => {
    if(err) console.error(err);
  });
}

/*********************************************
      DBに接続
*********************************************/

DB.connect( err => {
  if(err) console.error(err); 
  dbCreate();
  tableCreate();
  selectTable();
});


/*********************************************
      CORSの許可
*********************************************/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

/*********************************************
     body-parserに基づいた着信リクエストの解析。
     結果を配列で返す
*********************************************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GetとPostのルーティング
const router: express.Router = express.Router()

router.get('api/vi/', (req:express.Request, res:express.Response) => {
  const sql = `SELECT * FROM ${process.env.TABLE_NAME}`;
  DB.query(sql, err => {
    if(err) console.error(err);
  });
});




/*********************************************
       POSTされた値をDBヘ挿入 & 表示
*********************************************/
router.post('/api/v1/add', (req:express.Request, res:express.Response) => {
    if(res) {
      const insertSql = `INSERT INTO ${process.env.TABLE_NAME} SET ?`;
      const data = [req.body.title, req.body.description];
      DB.query(insertSql, data, (err) => {
        if(err) console.error(err);
        res.send(req.query);
      });
    } else {
      console.error(req.body);
    }
});


router.get('/api/v1/edit/:id', (req:express.Request, res:express.Response) => {
  const sql = `select * from ${process.env.TABLE_NAME} WHERE id = ?`;
  DB.query(sql, [req.params.id], (err, result, fields) => {
    if(err) {
      console.error(err);
      return;
    }
    res.send({result});
  })
})


router.post('/api/v1/update/:id', (req:express.Request, res:express.Response) => {
  const sql = `UPDATE ${process.env.TABLE_NAME} SET ? WHERE id = ${req.params.id}`;
  console.log(sql);
  DB.query(sql, [req.body], (err, result, fields) => {
    console.log([req.body.name, req.body.email]);
    if(err) return;
    res.send({result});
  });
});


router.get('/api/v1/delete/:id', (req:express.Request, res:express.Response) => {
  const sql = `DELETE FROM ${process.env.TABLE_NAME} WHERE id = ?`;
  DB.query(sql, [req.params.id], (err, result, fields) => {
    if(err) {
      console.error(err);
      return;
    }
    res.send({result});
  });
});

app.use(router)

// 任意のポートでAPIサーバ起動
app.listen(port,()=>{ console.log(`Example app listening on port ${port} !`) })