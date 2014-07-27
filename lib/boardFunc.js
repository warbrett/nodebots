'use strict';

var five = require('johnny-five');

function register(){
  module.exports.led = new five.Led(13);
}

module.exports = {
  register: register,
};
