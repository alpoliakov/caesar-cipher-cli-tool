const fs = require('fs');
const path = require('path');
const errorHandler = require('./error-handler');

const VISIBLE = fs.constants.F_OK;
const READABLE = fs.constants.R_OK;
const WRITABLE = fs.constants.W_OK;

const streamInput = (input) => {
  if (input) {
    const readPath = path.resolve(__dirname, input);

    try {
      fs.accessSync(readPath, VISIBLE | READABLE);
      return fs.createReadStream(readPath, {
        encoding: 'utf8',
      });
    } catch (error) {
      errorHandler(error);
    }
  }

  console.log('Please, enter text: ');
  return process.stdin;
};

const streamOutput = (output) => {
  if (output) {
    const writePath = path.resolve(__dirname, output);

    try {
      fs.accessSync(writePath, VISIBLE | WRITABLE);
      return fs.createWriteStream(writePath, {
        flags: 'a',
        encoding: 'utf8',
      });
    } catch (error) {
      errorHandler(error);
    }
  }

  return process.stdout;
};

module.exports = {
  streamInput,
  streamOutput,
};
