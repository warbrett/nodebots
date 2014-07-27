'use strict';

var express = require('express');
var five = require('johnny-five');

var board = require('../lib/fiveClient');
var boardFunc = require('../lib/boardFunc');

var router = express.Router();

router.get('/', function(req, res) {
  boardFunc.led.strobe();
  res.send('Strobe it!');
});

module.exports = router;
