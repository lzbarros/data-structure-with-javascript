/* eslint-disable no-unused-vars */

/**
 * Class Ordering
 */
class Ordering {
  /**
   * @function bubbleSort
   * @param  {type} array {description}
   * @return {type} {description}
   */
  bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[i] < array[j]) {
          this.swap(array, i, j);
        }
      }
    }
    return array;
  }

  /**
   * @function selectionSort
   * @param  {type} array {description}
   * @return {type} {description}
   */
  selectionSort(array) {
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
      minIndex = i;
      for (let j = i; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      this.swap(array, i, minIndex);
    }
    return array;
  }

  /**
   * @function insertionSort
   * @param  {type} array {description}
   * @return {type} {description}
   */
  insertionSort(array) {
    let j;
    let temp;
    for (let i = 1; i < array.length; i++) {
      j = i;
      temp = array[i];

      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
    return array;
  }

  /**
   * @function mergeSort
   * @param  {type} array {description}
   * @return {type} {description}
   */
  mergeSort(array) {
    const arrayLength = array.length;
    if (arrayLength === 1) {
      return array;
    }

    const middle = Math.floor(arrayLength / 2);
    const arrayLeft = array.slice(0, middle);
    const arrayRigth = array.slice(middle, arrayLength);

    return this.merge(this.mergeSort(arrayLeft), this.mergeSort(arrayRigth));
  }

  /**
   * @function merge
   * @param  {type} arrayLeft  {description}
   * @param  {type} arrayRigth {description}
   * @return {type} {description}
   */
  merge(arrayLeft, arrayRigth) {
    const result = [];
    let indexLeft = 0;
    let indexRigth = 0;

    while (indexLeft < arrayLeft.length && indexRigth < arrayRigth.length) {
      if (arrayLeft[indexLeft] < arrayRigth[indexRigth]) {
        result.push(arrayLeft[indexLeft++]);
      } else {
        result.push(arrayRigth[indexRigth++]);
      }
    }

    while (indexLeft < arrayLeft.length) {
      result.push(arrayLeft[indexLeft++]);
    }

    while (indexRigth < arrayRigth.length) {
      result.push(arrayRigth[indexRigth++]);
    }
    return result;
  }

  /**
   * @function quickSort
   * @param  {type} array {description}
   * @return {type} {description}
   */
  quickSort(array) {
    if (array && array.length > 0) {
      return this.quick(array, 0, array.length - 1);
    }
  }

  /**
   * @function quick
   * @param  {type} array {description}
   * @param  {type} indexLeft  {description}
   * @param  {type} indexRigth {description}
   * @return {type} {description}
   */
  quick(array, indexLeft, indexRigth) {
    const partitionIndex = this.partition(array, indexLeft, indexRigth);

    if (partitionIndex - 1 > indexLeft) {
      this.quick(array, indexLeft, indexRigth - 1);
    }
    if (partitionIndex < indexRigth) {
      this.quick(array, partitionIndex, indexRigth);
    }

    return array;
  }

  /**
   * @function partition
   * @param  {type} array {description}
   * @param  {type} indexLeft  {description}
   * @param  {type} indexRigth {description}
   * @return {type} {description}
   */
  partition(array, indexLeft, indexRigth) {
    const pivot = array[Math.floor((indexLeft + indexRigth) / 2)];
    let i = indexLeft;
    let j = indexRigth;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }

      if (i <= j) {
        this.swap(array, i, j);
        i++;
        j--;
      }

      return i;
    }

    return index;
  }

  /**
   * @function swap
   * @param  {type} array      {description}
   * @param  {type} leftIndex  {description}
   * @param  {type} rigthIndex {description}
   * @return {type} {description}
   */
  swap(array, leftIndex, rigthIndex) {
    const leftElement = array[leftIndex];
    array[leftIndex] = array[rigthIndex];
    array[rigthIndex] = leftElement;

    return array;
  }
}
