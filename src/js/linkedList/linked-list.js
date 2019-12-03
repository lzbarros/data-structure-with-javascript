/* eslint-disable no-unused-vars */

/**
 * LinkedList class
 */
class LinkedList {
  /**
   *Creates an instance of LinkedList.
   * @memberof LinkedList
   */
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /**
   *
   *
   * @return {int}
   * @memberof LinkedList
   */
  getLength() {
    return this.length;
  }

  /**
   *
   *
   * @param {*} length
   * @memberof LinkedList
   */
  setLength(length) {
    this.length = length;
  }

  /**
   *
   *
   * @return {Object}
   * @memberof LinkedList
   */
  getHead() {
    return this.head;
  }

  /**
   *
   *
   * @param {*} head
   * @memberof LinkedList
   */
  setHead(head) {
    this.head = head;
  }

  /**
   *
   *
   * @param {*} element
   * @return {object}
   * @memberof LinkedList
   */
  buildNode(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
    return {'element': this.element,
      'next': this.next, 'previous': this.previous};
  }

  /**
   * @param {*} element
   * @memberof LinkedList
   */
  append(element) {
    const node = this.buildNode(element);
    let current;

    if (!this.getHead()) {
      this.setHead(node);
    } else {
      current = this.getHead();

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.setLength(this.getLength() + 1);
  }

  /**
   * @param {*} element
   * @param {*} position
   * @memberof LinkedList
   */
  insert(element, position) {
    let current = this.getHead();
    const node = this.buildNode(element);
    let previous;
    let length = 0;

    if (position == 0) {
      node.next = current;
      this.setHead(node);
      this.setLength(this.getLength() + 1);
      return;
    }

    while (current) {
      if (length == position) {
        node.next = previous.next;
        previous.next = node;
        break;
      }
      previous = current;
      current = current.next;

      length++;
    }

    if (!current) {
      previous.next = node;
    }

    this.setLength(this.getLength() + 1);
  }

  /**
   * @return {Object}
   * @memberof LinkedList
   */
  removeFirst() {
    const current = this.getHead();
    this.setHead(current.next);
    this.setLength(this.getLength() - 1);

    return current;
  }

  /**
   * @return {Object}
   * @memberof LinkedList
   */
  removeLast() {
    let current = this.getHead();
    let previous;
    let elementRemoved;

    if (!current.next) {
      this.setHead(null);
      this.setLength(this.getLength() - 1);
      return current;
    }

    while (current) {
      if (!current.next) {
        elementRemoved = previous.next;
        previous.next = null;
        break;
      }
      previous = current;
      current = current.next;
    }

    this.setLength(this.getLength() - 1);

    return elementRemoved;
  }

  /**
   * @param {*} position
   * @return {Object}
   * @memberof LinkedList
   */
  removeByPosition(position) {
    let current = this.getHead();
    let previous;
    let length = 0;
    let elementRemoved;

    if (position == 0) {
      elementRemoved = current;
      this.setHead(current.next);
      current = null;
    }

    while (current) {
      if (length == position) {
        elementRemoved = previous.next;
        previous.next = current.next;
        break;
      }

      previous = current;
      current = current.next;

      length++;
    }

    this.setLength(this.getLength() - 1);

    return elementRemoved;
  }

  /**
   * @function removeByElement
   * @param  {type} element {description}
   * @return {type} {description}
   */
  removeByElement(element) {
    const indexOf = this.indexOf(element);
    if (indexOf > -1) {
      return this.removeByPosition(indexOf);
    } else {
      return -1;
    }
  }

  /**
   * @function indexOf
   * @param  {type} element {description}
   * @return {type} {description}
   */
  indexOf(element) {
    let current = this.getHead();
    let length = 0;

    while (current) {
      if (current.element == element) {
        return length;
      }

      current = current.next;
      length++;
    }

    return -1;
  }

  /**
   * @return {string}
   * @memberof LinkedList
   */
  toString() {
    let current = this.getHead();
    let resultString = '';
    let first = true;

    while (current) {
      resultString += first ? current.element : `, ${current.element}`;
      current = current.next;
      first = false;
    }

    return resultString;
  }

  /**
   * @return {boolean}
   * @memberof LinkedList
   */
  isEmpty() {
    return this.getHead() === null;
  }
}
