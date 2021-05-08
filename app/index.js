const { pipeline } = require('stream');
const { getParams } = require('./params');
const { streamInput, streamOutput } = require('./utils');
const { CaesarTransform } = require('./transformer');

const { input, output, shift, action } = getParams();

const read = streamInput(input);
const transform = new CaesarTransform({ shift, action });
const write = streamOutput(output);

pipeline(read, transform, write, (error) => {
  if (error) {
    console.error('Pipeline failed.', error);
  } else {
    console.log('Pipeline succeeded.');
  }
});
