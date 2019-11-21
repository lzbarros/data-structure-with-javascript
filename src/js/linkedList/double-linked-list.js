/* eslint-disable no-unused-vars */

/**
 * DoubleLinkedList class
 */
class DoubleLinkedList {
  /**
   *Creates an instance of DoubleLinkedList.
   * @memberof DoubleLinkedList
   */
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   *
   *
   * @return {int}
   * @memberof DoubleLinkedList
   */
  getLength() {
    return this.length;
  }

  /**
   *
   *
   * @param {*} length
   * @memberof DoubleLinkedList
   */
  setLength(length) {
    this.length = length;
  }

  /**
   *
   *
   * @return {Object}
   * @memberof DoubleLinkedList
   */
  getHead() {
    return this.head;
  }

  /**
   *
   *
   * @param {*} head
   * @memberof DoubleLinkedList
   */
  setHead(head) {
    this.head = head;
  }

  /**
   *
   *
   * @return {Object}
   * @memberof DoubleLinkedList
   */
  getTail() {
    return this.tail;
  }

  /**
   *
   *
   * @param {*} tail
   * @memberof DoubleLinkedList
   */
  setTail(tail) {
    this.tail = tail;
  }

  /**
   *
   *
   * @param {*} element
   * @return {object}
   * @memberof DoubleLinkedList
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
   * @memberof DoubleLinkedList
   */
  append(element) {
    const node = this.buildNode(element);
    let current;

    if (!this.getHead()) {
      this.setHead(node);
      this.setTail(node);
    } else {
      current = this.getHead();

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      node.previous = current;
      this.setTail(node);
    }

    this.setLength(this.getLength() + 1);
  }

  /**
   * @param {*} element
   * @param {*} position
   * @memberof DoubleLinkedList
   */
  insert(element, position) {
    let current = this.getHead();
    const node = this.buildNode(element);
    let previous;
    let length = 0;

    if (position == 0) {
      node.next = current;
      current.previous = node;
      this.setHead(node);
      if (this.getLength() === 1) {
        this.setTail(node);
      }
      this.setLength(this.getLength() + 1);
      return;
    }

    while (current) {
      if (length == position) {
        node.next = previous.next;
        node.previous = previous;
        previous.next = node;
        current.previous = node;
        break;
      }
      previous = current;
      current = current.next;

      length++;
    }

    if (!current) {
      previous.next = node;
      node.previous = previous;
      this.setTail(node);
    }

    this.setLength(this.getLength() + 1);
  }

  /**
   * @return {Object}
   * @memberof DoubleLinkedList
   */
  removeFirst() {
    const current = this.getHead();
    const newHead = current.next;
    newHead.previous = null;
    this.setHead(newHead);
    this.setLength(this.getLength() - 1);

    return current;
  }

  /**
   * @return {Object}
   * @memberof DoubleLinkedList
   */
  removeLast() {
    const current = this.getTail();
    const newTail = current.previous;
    newTail.next = null;

    this.setTail(newTail);
    this.setLength(this.getLength() - 1);

    return current;
  }

  /**
   * @param {*} position
   * @return {Object}
   * @memberof DoubleLinkedList
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

    if (position + 1 === this.getLength()) {
      return this.removeLast();
    }

    while (current) {
      if (length == position) {
        elementRemoved = previous.next;
        previous.next = current.next;
        previous.next.previous = current.previous;
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
    const indexOf = indexOf(element);
    if (indexOf > -1) {
      return removeByPosition(indexOf);
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
   * @memberof DoubleLinkedList
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
   * @memberof DoubleLinkedList
   */
  isEmpty() {
    return this.getHead() === null;
  }
}
