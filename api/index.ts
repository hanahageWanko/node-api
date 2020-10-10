import express from 'express'
import * as database from './database'
import bodyParser from 'body-parser';
require('dotenv').config();

const DB = database.DB;
const port:string | number = process.env.BASE_URL || 3000;
const app: express.Express = express();


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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// GetとPostのルーティング
const router: express.Router = express.Router()

/*********************************************
      テーブル内容取得
*********************************************/
router.get('/api/v1', (req:express.Request, res:express.Response) => {
  const selectTableSql = `SELECT * from ${process.env.TABLE_NAME}`;
  DB.query(selectTableSql, (err, result, fields) => {
    if(err) console.error(err);
    res.send(result);
  });
})




/*********************************************
       POSTされた値をDBヘ挿入 & 表示
*********************************************/
router.post('/api/v1/add/', (req:express.Request, res:express.Response) => {
  const insertSql = `INSERT INTO ${process.env.TABLE_NAME} SET ?`;
  DB.query(insertSql, req.body, (err,result,fields) => {
    if(err){
      console.error(err);
      return;
    }
    res.send(req.body);
  });
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

//UPDATE Glossary SET title="mmmm", description="mmmm" WHERE id = 16;
router.post('/api/v1/update/:id', (req:express.Request, res:express.Response) => {
  const sql = `UPDATE ${process.env.TABLE_NAME} SET ? WHERE id = ?`;
  console.log([req.body, req.params.id]);
  DB.query(sql, [req.body, req.params.id], (err, result, fields) => {
    if(err) {
      console.error(err);
      return;
    }
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

// 3000番ポートでAPIサーバ起動
app.listen(port,()=>{ console.log(`Example app listening on port ${port}!`) })