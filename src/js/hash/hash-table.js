/* eslint-disable no-unused-vars */
/**
 * Class HashTable
 */
class HashTable {
  /**
   * @function constructor
   */
  constructor() {
    this.table = [];
  }

  /**
   * @function valuePair
   * @param  {type} key   {description}
   * @param  {type} value {description}
   * @return {type} {description}
   */
  valuePair(key, value) {
    return {
      key,
      value,
      toString: () => {
        return `[${key} - ${value}]`;
      },
    };
  }

  /**
   * @function getTable
   * @return {array} {description}
   */
  getTable() {
    return this.table;
  }

  /**
   * @function put
   * @param  {object} key   {description}
   * @param  {object} value {description}
   * @return {array} {description}
   */
  put(key, value) {
    const position = this.loseloseHashTable(key);

    const valuePair = this.valuePair(key, value);

    if (this.getTable()[position]) {
      this.getTable()[position].append(valuePair);
    } else {
      this.getTable()[position] = new LinkedList();
      this.getTable()[position].append(valuePair);
    }

    return this.getTable();
  }

  /**
   * @function remove
   * @param  {type} key {description}
   * @return {boolean} It was removed?
   */
  remove(key) {
    const tableElement = this.getTable()[this.loseloseHashTable(key)];
    if (!tableElement) {
      return false;
    }
    let current = tableElement.getHead();

    while (true) {
      if (!current) {
        return false;
      }
      if (current.element.key === key) {
        tableElement.removeByElement(current.element);
        if (tableElement.isEmpty()) {
          this.getTable()[this.loseloseHashTable(key)] = undefined;
        }
        return true;
      }
      current = current.next;
    }
  }

  /**
   * @function get
   * @param  {type} key {description}
   * @return {object} {description}
   */
  get(key) {
    const tableElement = this.getTable()[this.loseloseHashTable(key)];

    if (!tableElement) {
      return false;
    }
    let current = tableElement.getHead();

    while (true) {
      if (!current) {
        return false;
      }
      if (current.element.key === key) {
        return current.element;
      }
      current = current.next;
    }
  }

  /**
   * @function size
   * @return {type} {description}
   */
  size() {
    return this.getTable().length;
  }

  /**
   * @function loseloseHashTable
   * @param  {type} key {description}
   * @return {type} {description}
   */
  loseloseHashTable(key) {
    let hash = 0;
    for (let x = 0; x < key.length; x++) {
      hash += key.charCodeAt(x);
    }
    return hash % 37;
  }
}
