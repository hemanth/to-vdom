var isDom = require('is-dom');
var toDom = require('dom-to-string');
var virtual = require('virtual-html');

module.exports = function (html, callback) {

  if (isDom(html)) {
    html = toDom(html);
  }

  return virtual(html, callback);

};
