const { program } = require('commander');
const commander = require('commander');

const validationAction = (value) => {
  if (!value || value === '-s' || value === '--shift') {
    throw new commander.InvalidOptionArgumentError("Missing argument for '-a, --action <string>'");
  }
  if (!['encode', 'decode'].includes(value)) {
    throw new commander.InvalidOptionArgumentError(
      "Argument '-a, --action <string>' must be 'encode' or 'decode'",
    );
  }

  return value;
};

const validationShift = (value) => {
  if (!value) {
    throw new commander.InvalidOptionArgumentError("Missing argument for '-s, --shift <number>'");
  }

  if (!/^-?\d+$/.test(value)) {
    throw new commander.InvalidOptionArgumentError(
      'Argument "-s, --shift <number>" value must be an integer!',
    );
  }

  return value;
};

program
  .requiredOption(
    '-a, --action <string>',
    'What action do you want to perform: "encode" or "decode" (required)',
    validationAction,
  )
  .requiredOption(
    '-s, --shift <number>',
    'Set the shift for encode/decode text (required)',
    validationShift,
  )
  .option('-i, --input <input>', 'An input file where to get the data from')
  .option('-o, --output <output>', 'An output file to save the data to')
  .parse(process.argv);

module.exports = {
  getParams: () => program.opts(),
};
