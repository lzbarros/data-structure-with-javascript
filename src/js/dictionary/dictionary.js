/* eslint-disable no-unused-vars */
/**
 * Class Dictionary
 */
class Dictionary {
  /**
   * @function constructor
   */
  constructor() {
    this.items = {};
  }

  /**
   * @function setItems
   * @param  {type} items {description}
   */
  setItems(items) {
    this.items = items;
  }

  /**
   * @function getItems
   * @return {type} {description}
   */
  getItems() {
    return this.items;
  }

  /**
   * @function set
   * @param  {type} key   {description}
   * @param  {type} value {description}
   */
  set(key, value) {
    this.getItems()[key] = value;
  }

  /**
   * @function delete
   * @param  {type} key {description}
   * @return {type} {description}
   */
  delete(key) {
    if (this.has(key)) {
      delete this.getItems()[key];
      return true;
    }

    return false;
  }

  /**
   * @function has
   * @param  {type} key {description}
   * @return {type} {description}
   */
  has(key) {
    return this.getItems().hasOwnProperty(key);
  }

  /**
   * @function get
   * @param  {type} key {description}
   * @return {type} {description}
   */
  get(key) {
    return this.has(key) ? this.getItems()[key] : undefined;
  }

  /**
   * @function clear
   */
  clear() {
    this.setItems({});
  }

  /**
   * @function size
   * @return {type} {description}
   */
  size() {
    return Object.key(this.getItems()).length;
  }

  /**
   * @functionkeys
   * @return {type} {description}
   */
  keys() {
    return Object.key(getItems());
  }

  /**
   * @function values
   * @return {type} {description}
   */
  values() {
    return Object.values(getItems());
  }
}
