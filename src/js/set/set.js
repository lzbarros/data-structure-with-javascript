/* eslint-disable no-unused-vars */
/**
 * Class Set
 */
class Set {
  /**
   * @function union
   * @param  {object} firstSet  {first set}
   * @param  {object} secondSet {second set}
   * @return {array} union between 2 sets
   */
  union(firstSet = {}, secondSet = {}) {
    let values = Object.keys(firstSet);
    const unionValues = {};

    for (let x = 0; x < values.length; x++) {
      unionValues[values[x]] = values[x];
    }

    values = Object.keys(secondSet);

    for (let x = 0; x < values.length; x++) {
      if (!unionValues.hasOwnProperty(values[x])) {
        unionValues[values[x]] = values[x];
      }
    }

    return Object.keys(unionValues);
  }

  /**
   * @function intersection
   * @param  {type} firstSet  {first set}
   * @param  {type} secondSet {second set}
   * @return {array} intersection between two sets
   */
  intersection(firstSet = {}, secondSet = {}) {
    const values = Object.keys(firstSet);
    const intersectionValues = [];

    for (let x = 0; x < values.length; x++) {
      if (secondSet.hasOwnProperty(values[x])) {
        intersectionValues.push(values[x]);
      }
    }

    return intersectionValues;
  }

  /**
   * @function subset
   * @param  {object} firstSet  {Main set}
   * @param  {object} secondSet {Sub set}
   * @return {array} sub set between two sets
   */
  subset(firstSet = {}, secondSet = {}) {
    const values = Object.keys(secondSet);
    const subsetValues = [];

    if (Object.keys(firstSet).length < values.length) {
      return [];
    }

    for (x = 0; x < values.length; x++) {
      if (firstSet.hasOwnProperty(values[x])) {
        subsetValues.push(values[x]);
      } else {
        return [];
      }
    }

    // If subsetValues is empty the secondSet is not a subset of the firstSet
    return subsetValues;
  }

  /**
   * @function subset
   * @param  {object} firstSet  {Main set}
   * @param  {object} secondSet {Sub set}
   * @return {array} sub set between two sets
   */
  difference(firstSet = {}, secondSet = {}) {
    let values = Object.keys(firstSet);
    const differenceValues = {};

    for (x = 0; x < values.length; x++) {
      if (!secondSet.hasOwnProperty(values[x])) {
        differenceValues[values[x]] = values[x];
      } else {
        delete secondSet[values[x]];
      }
    }

    values = Object.keys(secondSet);

    for (x = 0; x < values.length; x++) {
      if (!differenceValues.hasOwnProperty(values[x])) {
        differenceValues[values[x]] = values[x];
      }
    }

    return Object.keys(differenceValues);
  }
}
