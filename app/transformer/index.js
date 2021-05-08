const { Transform } = require('stream');
const { decodeAction, encodeAction } = require('../crypto');

const ENCODE = 'encode';

class CaesarTransform extends Transform {
  constructor({ shift = 1, action = ENCODE }) {
    super();
    this.shift = shift;
    this.action = action;
    this.decode = decodeAction;
    this.encode = encodeAction;
  }

  _transform(data, encoding, callback) {
    this.push(this[this.action](data, this.shift));
    callback();
  }
}

module.exports = { CaesarTransform };
