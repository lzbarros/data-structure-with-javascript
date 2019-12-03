/* eslint-disable no-unused-vars */
/* eslint-disable no-invalid-this */
const getSources = () => {
  return {
    BI_DIMENSIONAL: 'src/js/arrays/arrays-bidimensional.js',
    TRI_DIMENSIONAL: 'src/js/arrays/arrays-tridimensional.js',
    STACK: 'src/js/stack/stack.js',
    STACK_DECIMAL_TO_BINARY: 'src/js/stack/decimal-to-binary.js',
    STACK_BASE_CONVERTER: 'src/js/stack/base-converter.js',
    QUEUE: 'src/js/queue/queue.js',
    SET: 'src/js/set/set.js',
    HASH_TABLE: 'src/js/hash/hash-table.js',
    getLinkedListSource: {
      LINKED_LIST: {
        source: 'src/js/linkedList/linked-list.js',
        getInstance: () => new LinkedList(),
        setLinkedList: (linkedList) =>
          this.linkedList = linkedList,
        getLinkedList: () => {
          return this.linkedList;
        },
      },
      DOUBLE_LINKED_LIST: {
        source: 'src/js/linkedList/double-linked-list.js',
        getInstance: () => new DoubleLinkedList(),
        setLinkedList: (doubleLinkedList) =>
          this.doubleLinkedList = doubleLinkedList,
        getLinkedList: () => {
          return this.doubleLinkedList;
        },
      },
    },
  };
};
