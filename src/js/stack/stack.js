/* eslint-disable no-unused-vars */
/**
 * Stack class
 */
class Stack {
  /**
   * @function constructor
   * @param  {type} array {description}
   */
  constructor(array = []) {
    this.array = array;
  }

  /**
   * @function push
   * @param  {type} element {description}
   * @return {type} {description}
   */
  push(element = 0) {
    return this.array.push(element);
  }

  /**
   * @function pop
   * @return {type} {description}
   */
  pop() {
    return this.array.pop();
  }

  /**
   * @function peek
   * @return {type} {description}
   */
  peek() {
    return this.array[this.size() - 1];
  }

  /**
   * @function isEmpty
   * @return {type} {description}
   */
  isEmpty() {
    return this.array.length === 0;
  }

  /**
   * @function clear
   */
  clear() {
    this.array = [];
  }

  /**
   * @function size
   * @return {type} {description}
   */
  size() {
    return this.array.length;
  }

  /**
   * @function getStack
   * @return {type} {description}
   */
  getStack() {
    return this.array;
  }
}
