/**
 * [api.js]
 * encoding=UTF-8
 */
var express = require("express");
var router = express.Router();

var Factory4Hook = require("../../factory4hook.js").Factory4Hook;

var itemsSingleton = new Factory4Hook(require("../../api/v1/crud_items"));
// var items = require('../_v1/items');

if (process.env.NODE_ENV == "test") {
  // routerの場合は、module.exports がそのままrouterで置き換えらえる仕様なので、
  // 個別では無くて、 routerに対してプロパティを足すことで対応する。
  router["itemsSingleton"] = itemsSingleton;
}
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// router.use('/', function (req, res, next) {
// 	var headers = req.headers;

// 	// 共通処理はここで実施
// 	console.log('api')
// 	res.header({ // res.set(field [, value]) Aliased as res.header(field [, value]).
// 		"Access-Control-Allow-Origin" : "*", // JSONはクロスドメインがデフォルトNG。
// 		"Pragma" : "no-cacha",
// 		"Cache-Control" : "no-cache",
// 		"Content-Type" : "application/json; charset=utf-8"
// 	});

// 	// 次の定義ルーターへ処理を継続する。
// 	next();
// });

var _sendResponseAferPromise = function(targetPromise, res) {
  // console.log('targetPromise')
  // console.log(targetPromise)
  return targetPromise
    .then(function(result) {
      console.log("result");
      console.log(result);
      res.status(result.status).send(result.jsonData);
      res.end();
    })
    .catch(err => {
      res.status(500).send(err);
      res.end();
    });
};

// `//v1` continuing...
// router.get('/users/USER-NAME/items', function (req, res) {
router.get("/users/:userId/items", function(req, res) {
  var enumerateItemsByUserName = itemsSingleton.getInstance()
    .enumerateItemsByUserName;
  // var enumerateItemsByUserName = items.enumerateItemsByUserName;

  var userName = req.params.userId;
  var query = req.query;
  var promise = enumerateItemsByUserName(userName, query);

  _sendResponseAferPromise(promise, res);
});

router.post("/users/:userId/items", function(req, res) {
  console.log("miojihgijkljguoklnjbiuho");
  console.log(req);
  var createItemAtUserName = itemsSingleton.getInstance().createItemAtUserName;
  var userName = req.params.userId;
  var postData = req.body;
  // console.log('createItemAtUserName')
  // console.log(createItemAtUserName)
  // console.log(userName)
  // console.log(postData)
  var promise = createItemAtUserName(userName, postData);
  // console.log('promise')
  // console.log(promise)

  _sendResponseAferPromise(promise, res);
});

router.put("/users/:userId/items/:id", function(req, res) {
  var updateItemAtUserName = itemsSingleton.getInstance().updateItemAtUserName;
  var userName = req.params.userId;
  var putData = req.body;
  var itemId = req.params.id;
  var promise = updateItemAtUserName(userName, putData, itemId);

  _sendResponseAferPromise(promise, res);
});

router.delete("/users/:userId/items/:id", function(req, res) {
  var deleteItemAtUserName = itemsSingleton.getInstance().deleteItemAtUserName;
  var userName = req.params.userId;
  var itemId = req.params.id;
  var promise = deleteItemAtUserName(userName, itemId);

  _sendResponseAferPromise(promise, res);
});

module.exports = router;
