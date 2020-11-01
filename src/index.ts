import express from 'express'
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import apiRouter from './routes/api';
const cors = require('cors');
require('dotenv').config();

const app: express.Express = express();

//don't show the log when it is test
if(process.env.NODE_ENV!='test'){
  app.use(logger('dev'));
}

// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const DB = database.DB;
const port: string | any = process.env.PORT || 3000;
const app: express.Express = express();


/*********************************************
     CORSの許可
     リクエストボディをjsonで返す
*********************************************/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRouter);

// module.exports = app;
// var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const router: express.Router = express.Router()
app.use(router)

/**
 * Create HTTP server.
 */

// var server = http.createServer(app);
// 
/**
 * Listen on provided port, on all network interfaces.
 */

// server.listen(port);
