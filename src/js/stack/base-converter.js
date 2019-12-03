/* eslint-disable no-unused-vars */
const baseConverter = (decimalNumber, base) => {
  const stackNumber = [];
  let rest = 0;
  let baseString = '';
  const digits = '0123456789ABCDEF';

  while (decimalNumber > 0) {
    rest = Math.floor(decimalNumber % base);
    stackNumber.push(rest);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  while (stackNumber.length > 0) {
    baseString += digits[stackNumber.pop()];
  }

  return baseString;
};
