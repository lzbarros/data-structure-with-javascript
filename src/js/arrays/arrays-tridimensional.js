/* eslint-disable no-unused-vars */
const triDimensional = () => {
  let month = [];

  let firstWeeks = [];
  let lastWeeks = [];

  const avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
  const avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

  const avgTempWeek3 = [13, 45.7, 18, 7, 13.4, 21.5, 15];
  const avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

  firstWeeks = [avgTempWeek1, avgTempWeek2];
  lastWeeks = [avgTempWeek3, avgTempWeek4];

  month = [firstWeeks, lastWeeks];

  return month;
};
