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
   * @param {*} root
   */
  setRoot(root) {
    this.root = root;
  }

  /**
   *
   *
   * @param {*} key
   * @param {*} element
   * @return {object}
   * @memberof LinkedList
   */
  buildNode(key) {
    this.key = key;
    this.rightNode = null;
    this.leftNode = null;
    return {key, 'rightNode': this.rightNode,
      'leftNode': this.leftNode};
  };

  /**
   * @function insert
   * @param  {type} key {description}
   * @param  {type} element {description}
   */
  insert(key, element) {
    const node = this.buildNode(key, element);
    if (!this.getRoot()) {
      this.setRoot(node);
    } else {
      this.insertNode(this.getRoot(), node);
    }

    this.getRoot();
  }

  /**
   * @function insertNode
   * @param  {type} node {description}
   * @param  {type} newNode    {description}
   */
  insertNode(node, newNode) {
    if (node.key > newNode.key) {
      if (!node.leftNode) {
        node.leftNode = newNode;
      } else {
        this.insertNode(node.leftNode, newNode);
      }
    } else {
      if (!node.rightNode) {
        node.rightNode = newNode;
      } else {
        this.insertNode(node.rightNode, newNode);
      }
    }
  }

  /**
   * @function remove
   * @param  {type} node {description}
   * @param  {type} key  {description}
   * @return {type} {description}
   */
  remove(node, key) {
    return this.removeNode(node, key);
  }

  /**
   * @function removeNode
   * @param  {type} node {description}
   * @param  {type} key  {description}
   * @return {type}
   */
  removeNode(node, key) { // 58 19
    if (!node) {
      return null;
    }
    if (key < node.key) {
      node.leftNode = this.removeNode(node.leftNode, key);
    } else if (key > node.key) {
      node.rightNode = this.removeNode(node.rightNode, key);
    } else {
      if (!node.leftNode && !node.rightNode) {
        node = null;
        return node;
      }

      if (!node.leftNode) {
        node = node.rightNode;
        return node;
      }

      if (!node.rightNode) {
        node = node.leftNode;
        return node;
      }

      const nodeAux = this.min(node.leftNode);
      node.key = nodeAux.key;
      node.leftNode = this.remove(node.leftNode, nodeAux.key);
      return node;
    }

    return node;
  }

  /**
   * @function countNode
   * @param  {type} node {description}
   * @return {type} {description}
   */
  countNode(node) {
    if (node) {
      return this.countNode(node.leftNode) + this.countNode(node.rightNode) + 1;
    } else {
      return 0;
    }
  }

  /**
   * @function min
   * @param  {type} node {description}
   * @return {type} {description}
   */
  min(node) {
    if (node) {
      while (node && node.leftNode) {
        node = node.leftNode;
      }
      return node;
    }
  }

  /**
   * @function min
   * @param  {type} node {description}
   * @return {type} {description}
   */
  max(node) {
    if (node) {
      while (node && node.rightNode) {
        node = node.rightNode;
      }
      return node;
    }
  }

  /**
   * @function inOrder
   * @param  {type} node     {description}
   * @param  {type} callback {description}
   */
  inOrder(node, callback) {
    this.inOrderNode(node, callback);
  }

  /**
   * @function inOrderNode
   * @param  {type} node     {description}
   * @param  {type} callback {description}
   */
  inOrderNode(node, callback) {
    if (node) {
      this.inOrderNode(node.leftNode, callback);
      callback(`${node.key}`);
      this.inOrderNode(node.rightNode, callback);
    }
  }

  /**
   * @function inOrder
   * @param  {type} node     {description}
   * @param  {type} callback {description}
   */
  preOrder(node, callback) {
    this.preOrderNode(node, callback);
  }

  /**
   * @function inOrderNode
   * @param  {type} node     {description}
   * @param  {type} callback {description}
   */
  preOrderNode(node, callback) {
    if (node) {
      callback(`${node.key}`);
      this.preOrderNode(node.leftNode, callback);
      this.preOrderNode(node.rightNode, callback);
    }
  }

  /**
   * @function inOrder
   * @param  {type} node     {description}
   * @param  {type} callback {description}
   */
  postOrder(node, callback) {
    this.postOrderNode(node, callback);
  }

  /**
   * @function inOrderNode
   * @param  {type} node     {description}
   * @param  {type} callback {description}
   */
  postOrderNode(node, callback) {
    if (node) {
      this.postOrderNode(node.leftNode, callback);
      this.postOrderNode(node.rightNode, callback);
      callback(`${node.key}`);
    }
  }

  /**
   * @function search
   * @param  {type} node {description}
   * @param  {type} key {description}
   * @return {type} {description}
   */
  search(node, key) {
    return this.searchNode(node, key);
  }

  /**
   * @function searchNode
   * @param  {type} node {description}
   * @param  {type} key {description}
   * @return {type} {description}
  */
  searchNode(node, key) {
    if (node && node.key === key) {
      return node;
    }

    if (node && node.leftNode.key < key) {
      return this.searchNode(node.rightNode, key);
    } else if (node && node.rightNode.key > key) {
      return this.searchNode(node.leftNode, key);
    }
  }
};
