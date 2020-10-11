const app = require('../index');
const request = require('supertest');
const express = require('express');
const database = require('../database');
require('dotenv').config();
import * as iconv from 'iconv-lite';
iconv.encodingExists('foo');

const DB = database.DB;
const port = 3000;
const exp = express();
const Glossarys = [
  {
      id: '1',
      title: 'Glossary title No.1',
      discription: 'No.1 is winner'
  },
  {
    id: '2',
    title: 'Glossary title No.2',
    discription: 'No.1 is professor'
  }
];

describe("CRUD", () => {
  test("It should response the GET method", async() => {
    const response = await request(app).get('/api/v1/');
    expect(response.status).toBe(200);
    console.log(response.body);
    expect(response.body).toEqual({ hello: 'world' });
  });
});
