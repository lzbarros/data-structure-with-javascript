const gettingElementThroughInteraction1 = () => {
  // #1
  const daysOfWeek =
  ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return daysOfWeek;
};

const gettingElementThroughInteraction2 = (maxNumber = 10) => {
  // #2
  const fibArr = [];
  for (let x = 0; x <= maxNumber; x++) {
    if (fibArr.length > 1) {
      fibArr[x] = (fibArr[x-2] + fibArr[x-1]);
    } else {
      fibArr[x] = x;
    }
  }

  return fibArr;
};
