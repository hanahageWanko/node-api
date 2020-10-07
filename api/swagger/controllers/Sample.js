'use strict';

var utils = require('../utils/writer.js');
var Sample = require('../service/SampleService');

module.exports.getTest = function getTest (req, res, next, name) {
  Sample.getTest(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postTest = function postTest (req, res, next) {
  Sample.postTest()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
