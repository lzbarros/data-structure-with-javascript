/* eslint-disable no-unused-vars */
/**
 * Queue class
 */
class Queue {
  /**
   * @function constructor
   * @param {type} queue
   */
  constructor(queue = []) {
    this.queue = queue;
  }

  /**
   * @function enqueue
   * @param  {type} element {description}
   * @return {type} {description}
   */
  enqueue(element) {
    return this.queue.push(element);
  }

  /**
   * @function priorityEnqueue
   * @param  {type} element  {description}
   * @param  {type} priority {description}
   * @return {type} {description}
   */
  priorityEnqueue(element, priority) {
    let isAdded = false;
    for (x = 0; x < this.queue.length; x++) {
      if ((priority -1) < x) {
        this.queue.splice(x, 0, element);
        isAdded = true;
        break;
      }
    }

    if (!isAdded) {
      this.enqueue(element);
    }

    return this.enqueue;
  }

  /**
   * @function dequeue
   * @return {type} {description}
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   * @function front
   * @return {type} {description}
   */
  front() {
    return this.queue[0];
  }

  /**
   * @function size
   * @return {type} {description}
   */
  size() {
    return this.queue.length;
  }

  /**
   * @function isEmpty
   * @return {type} {description}
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * @function clear
   * @return {type} {description}
   */
  clear() {
    return this.queue = [];
  }

  /**
   * @function getQueue
   * @return {type} {description}
   */
  getQueue() {
    return this.queue;
  }
}
