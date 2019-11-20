const overwriteElement = (array = []) => {
  array[array.length] = 10;
  array[array.length] = 11;

  return array;
};

const pushElement = (array = []) => {
  array.push(12);
  array.push(13);
  array.push(14);
  array.push(15);
  array.push(16);

  return array;
};

const unshiftElement = (array = []) => {
  array.unshift(-1);
  array.unshift(-2);
  array.unshift(-3);
  array.unshift(-4);

  return array;
};

const insertElement = (numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    position = 3,
    deleteElement = 0,
    element = 2.5) => {
  numbers.splice(position, deleteElement, element);

  return numbers;
};
