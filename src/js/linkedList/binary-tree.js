/* eslint-disable no-unused-vars */
/**
 * Class BinaryTree
 */
class BinaryTree {
  /**
   * @function constructor
   */
  constructor() {
    this.root = null;
  }

  /**
   * @function getRoot
   * @return {type} {description}
   */
  getRoot() {
    return this.root;
  }

  /**
   * @function setRoot
   */
  setRoot(root) {
    this.root = root;
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
    this.rightNode = null;
    this.leftNode = null;
    return {'element': this.element,
      'rightNode': this.rightNode, 'leftNode': this.leftNode,
    };
  };

  /**
   * @function insert
   * @param  {type} element {description}
   * @return {type} {description}
   */
  insert(element) {
    const node = this.buildNode(element);
    if (!this.getRoot()) {
      this.setRoot(node);
    } else {
      const root = this.getRoot();
    }

    return this.getRoot();
  }

  /**
   * @function search
   * @param  {type} node {description}
   * @param  {type} element {description}
   * @return {type} {description}
   */
  search(node, element) {
    if (node.element === element) {
      return node;
    } else if (node.leftNode && node.leftNode.element === element) {
      return node.leftNode;
    } else if (node.rightNode && node.rightNode.element === element) {
      return node.rightNode;
    }

    return null;
  }
};
