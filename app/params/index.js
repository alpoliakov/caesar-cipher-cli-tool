const { program } = require('commander');
const commander = require('commander');

const validationAction = (value) => {
  if (!value || value === '-s' || value === '--shift') {
    throw new commander.InvalidOptionArgumentError("Missing argument for '-a, --action <string>'");
  }
  if (!['encode', 'decode'].includes(value)) {
    throw new commander.InvalidOptionArgumentError("'action' must be 'encode' or 'decode'");
  }

  return value;
};

const validationShift = (value) => {
  if (!value) {
    throw new commander.InvalidOptionArgumentError("Missing argument for 'shift'");
  }

  if (!/^-?\d+$/.test(value)) {
    throw new commander.InvalidOptionArgumentError('"shift" value must be an integer!');
  }

  return value;
};

program
  .requiredOption('-a, --action <string>', 'an action encode/decode', validationAction)
  .requiredOption('-s, --shift <number>', 'a shift', validationShift)
  .option('-i, --input <input>', 'an input file')
  .option('-o, --output <output>', 'an output file')
  .parse(process.argv);

module.exports = {
  getParams: () => program.opts(),
};
