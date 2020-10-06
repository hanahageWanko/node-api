const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect();

const app = express();

app.use(bodyParser.json());

app.get('/api/v1', (req, res) => {
  connection.query('select * from todo_list', (error, results, fields) => {
    console.log(req);
    if(error) {console.error(err)}
    res.send(results);
  });
});

app.get('/api/v1/:id', (req, res) => {
  connection.query('select * from todo_list where id = ?', req.params.id, (error, results, fields) => {
    if (error) {console.error(error)}
    res.send(results);
  });
});

app.post('/api/v1', (req, res) => {
  let todo = {
    name: req.body.name,
    isDone : req.body.isDone
  };

  connection.query("insert into todo_list(name, isDone) values(?, ?)", [todo.name, todo.isDone], (error, results, fields) => {
    if (error) { console.error(error) }
    res.send(todo)
  });
});

app.put('/api/v1/:id', (req, res) => {
  connection.query(`select * from todo_list`, (error, results, fields) => {
    connection.query("update todo_list set name = ?, isDone = ? where id = ?",
      [req.body.name, req.body.isDone, req.params.id], (error, result, fields) => {
        if (error) { console.log(error) }
        res.send(result)
      });
  });
});

app.delete('/api/v1/:id', (req, res) => {
  connection.query(`select * from todo_list`, (error, results, fields) => {
    connection.query("delete from todo_list where id = ?", req.params.id, (error, result, fields) => {
      if (error) { console.log(error) }
      res.send(result)
    });
  });
});



const port = process.removeListener.PORT || 3000;

app.listen(port)