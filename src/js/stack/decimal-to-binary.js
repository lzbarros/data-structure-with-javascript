const decimalToBinary = (decimalNumber = 0) => {
  const stackNumber = []; let rest; let binaryString = '';

  while (decimalNumber > 0) {
    rest = Math.floor(decimalNumber % 2);
    stackNumber.push(rest);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  while (stackNumber.length > 0) {
    binaryString += stackNumber.pop().toString();
  }

  return binaryString;
}
;