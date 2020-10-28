import express from 'express'
import mysql from 'mysql2';
require('dotenv').config();
/*********************************************
      使用するDBを定義
*********************************************/
export interface DB {
  host: string,
  user: string,
  password: string,
  database: string
}
export const DB = mysql.createConnection({
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
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL)`;
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

module.exports = {
  DB
}