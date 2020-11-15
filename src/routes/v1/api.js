const express = require("express");
const router = express.Router();

const Factory4Hook = require("../../factory4hook.js").Factory4Hook;

const itemsSingleton = new Factory4Hook(require("../../api/v1/crud_items"));

if (process.env.NODE_ENV == "test") router["itemsSingleton"] = itemsSingleton;
// console.log(itemsSingleton);
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
const _sendResponseAferPromise = function(targetPromise, res) {
  console.log("send-api");
  return targetPromise
    .then(function(result) {
      console.log("api-result");
      console.log(result);
      res.status(result.status).send(result.jsonData);
      res.end();
    })
    .catch(err => {
      console.log("err");
      console.log(targetPromise);
      res.status(500).send(err);
      res.end();
    });
};

router.get("/users/:userId/items", function(req, res) {
  const enumerateItemsByUserName = itemsSingleton.getInstance()
    .enumerateItemsByUserName;
  const userName = req.params.userId;
  const query = req.query;
  const promise = enumerateItemsByUserName(userName, query);
  console.log("get:" + { req });
  _sendResponseAferPromise(promise, res);
});

router.post("/users/:userId/items", function(req, res) {
  console.log("api-post");
  const createItemAtUserName = itemsSingleton.getInstance()
    .createItemAtUserName;
  const userName = req.params.userId;
  const postData = req.body;
  const promise = createItemAtUserName(userName, postData);
  console.log("post:" + { req });
  _sendResponseAferPromise(promise, res);
});

router.put("/users/:userId/items/:id", function(req, res) {
  const updateItemAtUserName = itemsSingleton.getInstance()
    .updateItemAtUserName;
  const userName = req.params.userId;
  const putData = req.body;
  const itemId = req.params.id;
  const promise = updateItemAtUserName(userName, putData, itemId);
  _sendResponseAferPromise(promise, res);
});

router.delete("/users/:userId/items/:id", function(req, res) {
  const deleteItemAtUserName = itemsSingleton.getInstance()
    .deleteItemAtUserName;
  const userName = req.params.userId;
  const itemId = req.params.id;
  const promise = deleteItemAtUserName(userName, itemId);

  _sendResponseAferPromise(promise, res);
});

module.exports = router;
