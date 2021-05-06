const ALPHABET_LENGTH = 26;
const DECIMAL = 10;
const LOWER_A_CODE = 65;
const LOWER_Z_CODE = 90;
const UPPER_A_CODE = 97;
const UPPER_Z_CODE = 122;

const cryptoTransform = (data, shiftValue) => {
  const text = data.toString();
  const shift =
    shiftValue >= 0 ? parseInt(shiftValue, DECIMAL) : 26 + (parseInt(shiftValue, DECIMAL) % 26);

  let result = '';

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= LOWER_A_CODE && code <= LOWER_Z_CODE) {
      result += String.fromCharCode(
        ((code - LOWER_A_CODE + shift) % ALPHABET_LENGTH) + LOWER_A_CODE,
      );
    } else if (code >= UPPER_A_CODE && code <= UPPER_Z_CODE) {
      result += String.fromCharCode(
        ((code - UPPER_A_CODE + shift) % ALPHABET_LENGTH) + UPPER_A_CODE,
      );
    } else {
      result += text.charAt(i);
    }
  }

  return result;
};

function decodeAction(data, shiftValue) {
  return cryptoTransform(data, (ALPHABET_LENGTH - shiftValue) % ALPHABET_LENGTH);
}

function encodeAction(data, shiftValue) {
  return cryptoTransform(data, shiftValue);
}

module.exports = {
  decodeAction,
  encodeAction,
};
