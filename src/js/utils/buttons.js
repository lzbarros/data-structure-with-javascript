/* eslint-disable no-invalid-this */
btnBiDimensional.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().BI_DIMENSIONAL);

  showResult(biDimensional());
};

btnTriDimensional.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().TRI_DIMENSIONAL);

  showResult(triDimensional());
};

btnSetStack.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().STACK);

  if (!getStack()) {
    const stack = new Stack([Math.floor(Math.random() * 100)]);
    setStack(stack);
  } else {
    getStack().push(Math.floor(Math.random() * 100));
  }

  showResult(stack.getStack());
};

btnPopStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    getStack().getStack().pop();
    showResult(getStack().getStack());
  }
};

btnPeekStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult([getStack().peek()]);
  }
};

btnSizeStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult([getStack().size()]);
  }
};

btnEmptyStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult(['No']);
  } else {
    showResult(['Yes']);
  }
};

btnShowStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult(getStack().getStack());
  }
};

btnClearStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    getStack().clear();
  }
};

btnDecimalToBinary.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);

  if (decimalNumber > 0) {
    await loadJSFile(getSources().STACK_DECIMAL_TO_BINARY);
    showResult([decimalToBinary(decimalNumber)]);
  }
};

btnBaseConverter.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);
  const baseNumber = window.prompt('Enter base number: ', 0);

  if (decimalNumber > 0 && baseNumber) {
    await loadJSFile(getSources().STACK_BASE_CONVERTER);
    showResult([baseConverter(decimalNumber, baseNumber)]);
  }
};

btnPriorityEnqueue.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser('Enter names separated by \',\' (comma) ', '');
  const priority = window.prompt('Enter priority', 0);

  if (users.length > 0) {
    await loadJSFile(getSources().QUEUE);

    let queue = {};
    if (!getQueue()) {
      queue = new Queue([]);
      setQueue(queue);
    } else {
      queue = getQueue();
    }

    for (let x = users.length -1; x >= 0; x--) {
      queue.priorityEnqueue(users[x], priority);
    }

    showResult(queue.getQueue());
  }
};

btnEnqueue.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser('Enter names separated by \',\' (comma) ', '');

  if (users.length > 0) {
    await loadJSFile(getSources().QUEUE);

    let queue = {};
    if (!getQueue()) {
      queue = new Queue([]);
      setQueue(queue);
    } else {
      queue = getQueue();
    }

    for (let x = 0; x < users.length; x++) {
      queue.enqueue(users[x]);
    }

    showResult(queue.getQueue());
  }
};

btnDequeue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    const element = getQueue().dequeue();
    alert(`Element '${element}' has been removed!` );
    showResult(getQueue().getQueue());
  }
};

btnSizeQueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    showResult([getQueue().size()]);
  }
};

btnEmptyQueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    showResult(['No']);
  } else {
    showResult(['Yes']);
  }
};

btnShowQueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    showResult(getQueue().getQueue());
  }
};

btnClearQueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    getQueue().clear();
    alert('Queue has been cleared!');
  }
};

btnSetHotPotatoPlayer.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  if (users.length > 0) {
    await loadJSFile(getSources().QUEUE);

    let potatoGameQueue;
    if (!getPotatoGameQueue()) {
      potatoGameQueue = new Queue([]);
      setPotatoGameQueue(potatoGameQueue);
    } else {
      potatoGameQueue = getPotatoGameQueue();
    }

    for (let x = 0; x < users.length; x++) {
      potatoGameQueue.enqueue(users[x]);
    }

    showResult(potatoGameQueue.getQueue());
  }
};

btnShowHotPotatoPlayer.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isPotatoGameQueueEmpty()) {
    showResult(getPotatoGameQueue().getQueue());
  }
};

btnStartHotPotatoGame.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const winner = startHotPotatoGame();

  showResult([`The winner is ${winner}`], false);
};

btnClearHotPotatoGame.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isPotatoGameQueueEmpty()) {
    getPotatoGameQueue().clear();
    alert('Hot Potato Game has been cleared!');
  }
};

btnShowLinkedList.onclick = () => {
  const selectElement = document.getElementById('linkedListSelect');
  const label = selectElement[selectElement.selectedIndex].label;
  setDefaultButtonConfig(`${this.document.activeElement.textContent} 
  - ${label}`);

  if (!isLinkedListEmpty()) {
    const result = getLinkedList().toString();

    const resultArr = result ? result.split(',') : result;

    showResultUsingButton(resultArr);
  }
};

btnSetLinkedList.onclick = async () => {
  const selectElement = document.getElementById('linkedListSelect');
  const label = selectElement[selectElement.selectedIndex].label;
  setDefaultButtonConfig(`${this.document.activeElement.textContent} 
  - ${label}`);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  if (users.length > 0) {
    const linkedListSource = getSources().getLinkedListSource[
        getSelectedLinkedList()];

    await loadJSFile(linkedListSource.source);

    let linkedlist = {};
    if (!getLinkedList()) {
      linkedlist = linkedListSource.getInstance();
      setLinkedList(linkedlist);
    } else {
      linkedlist = getLinkedList();
    }

    for (let x = 0; x < users.length; x++) {
      linkedlist.append(users[x].replace(/ /g, ''));
    }

    const result = linkedlist.toString();
    const resultArr = result ? result.split(',') : result;

    showResultUsingButton(resultArr);
  }
};

btnSetLinkedListSpecPos.onclick = async () => {
  const selectElement = document.getElementById('linkedListSelect');
  const label = selectElement[selectElement.selectedIndex].label;
  setDefaultButtonConfig(`${this.document.activeElement.textContent} 
  - ${label}`);

  if (isLinkedListEmpty()) {
    return;
  }

  const length = getLinkedList().getLength();
  const users = getInputFromUser(`Enter names separated by \',\' (comma)`, '');
  const position = window.prompt(`Enter position (Last position is ` +
      `${length})`, 1);

  if (position < 1 || position > (length + 1)) {
    alert(`Please type a number between 1 and ${length + 1}`);
    return;
  }

  if (users.length > 0) {
    const linkedListSource = getSources().getLinkedListSource[
        getSelectedLinkedList()];

    await loadJSFile(linkedListSource.source);

    let linkedlist = {};
    if (!getLinkedList()) {
      linkedlist = linkedListSource.getInstance();
      setLinkedList(linkedlist);
    } else {
      linkedlist = getLinkedList();
    }

    for (let x = users.length -1; x >= 0; x--) {
      linkedlist.insert(users[x].replace(/ /g, ''), position - 1);
    }

    const result = linkedlist.toString();
    const resultArr = result ? result.split(',') : result;

    showResultUsingButton(resultArr);
  };
};

btnRemoveLinkedListSpecPos.onclick = () => {
  const selectElement = document.getElementById('linkedListSelect');
  const label = selectElement[selectElement.selectedIndex].label;
  setDefaultButtonConfig(`${this.document.activeElement.textContent} 
  - ${label}`);

  if (!isLinkedListEmpty()) {
    const length = getLinkedList().getLength();
    const position = window.prompt(`Enter position (Last position is ` +
      `${length})`, 1);

    if (position < 1 || position > length) {
      alert(`Please type a number between 1 and ${length}`);
    } else {
      showResult([`${getLinkedList().removeByPosition(position - 1).element} 
        has been removed`]);
    }
  }
};

btnRemoveFirstLinkedList.onclick = () => {
  const selectElement = document.getElementById('linkedListSelect');
  const label = selectElement[selectElement.selectedIndex].label;
  setDefaultButtonConfig(`${this.document.activeElement.textContent} 
  - ${label}`);

  if (!isLinkedListEmpty()) {
    showResult([`${getLinkedList().removeFirst().element} 
      has been removed!`]);
  }
};

btnRemoveLastLinkedList.onclick = () => {
  const selectElement = document.getElementById('linkedListSelect');
  const label = selectElement[selectElement.selectedIndex].label;
  setDefaultButtonConfig(`${this.document.activeElement.textContent} 
  - ${label}`);

  if (!isLinkedListEmpty()) {
    showResult([`${getLinkedList().removeLast().element} 
      has been removed!`]);
  }
};

btnFillFirstSet.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  await loadJSFile(getSources().SET);

  let setElement = getSetElement();

  if (!setElement) {
    setElement = {firstSet: {}, secondSet: {}};
  }

  for (u of users) {
    const user = u.replace(/ /g, '');
    setElement.firstSet[user] = user;
  }

  setSetElement(setElement);

  showResult(Object.keys(setElement.firstSet));
};

btnFillSecondSet.onclick = async () => {
  setResultTitle(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  await loadJSFile(getSources().SET);

  let setElement = getSetElement();

  if (!setElement) {
    setElement = {firstSet: {}, secondSet: {}};
  }

  for (u of users) {
    const user = u.replace(/ /g, '');
    setElement.secondSet[user] = user;
  }

  setSetElement(setElement);

  showResult(Object.keys(setElement.secondSet));
};

btnShowSets.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  showResult(Object.keys(getSetElement().firstSet));
  showResult(Object.keys(getSetElement().secondSet));
};

btnUnionSet.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const set = new Set();
  const firstSet = passObjectWithoutReference(getSetElement().firstSet);
  const secondSet = passObjectWithoutReference(getSetElement().secondSet);

  const union = set.union(firstSet, secondSet);

  showResult(union);
};

btnIntersectionSet.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const set = new Set();
  const firstSet = passObjectWithoutReference(getSetElement().firstSet);
  const secondSet = passObjectWithoutReference(getSetElement().secondSet);

  const intersection = set.intersection(firstSet, secondSet);

  showResult(intersection);
};

btnDifferenceSet.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const set = new Set();
  const firstSet = passObjectWithoutReference(getSetElement().firstSet);
  const secondSet = passObjectWithoutReference(getSetElement().secondSet);

  const difference = set.difference(firstSet, secondSet);

  showResult(difference);
};

btnSubSet.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const set = new Set();
  const firstSet = passObjectWithoutReference(getSetElement().firstSet);
  const secondSet = passObjectWithoutReference(getSetElement().secondSet);

  const subset = set.subset(firstSet, secondSet);

  showResult(subset);
};

btnClearFirstSet.onclick = () => {
  const set = getSetElement();

  set.firstSet = {};

  setSetElement(set);

  alert(`First set has been cleared!`);
};

btnClearSecondSet.onclick = () => {
  const set = getSetElement();

  set.secondSet = {};

  setSetElement(set);

  alert(`Second set has been cleared!`);
};

btnSetHashTable.onclick = async () => {
  clearResult(getElementById('hashTableElement'));
  clearResult(getElementById('result'));
  clearResult(getElementById('treeImage'));
  setResultTitle(this.document.activeElement.textContent);

  await loadJSFile(getSources().HASH_TABLE);
  await loadJSFile(getSources().getLinkedListSource['LINKED_LIST'].source);

  if (!getHashTable()) {
    setHashTable(new HashTable());
  }

  setHashTableElement();
  showHashTableElements();
};

btnRemoveHashTable.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);
  clearResult(getElementById('hashTableElement'));

  if (getHashTable() && getHashTable().size() > 0) {
    removeHashTableElement();
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};

btnShowHashTable.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getHashTable() && getHashTable().size() > 0) {
    showHashTableElements();
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};

btnClearHashTable.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getHashTable()) {
    setHashTable(new HashTable());
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};

btnGetHashTable.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getHashTable()) {
    getHashTableElement();
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};

btnSetTree.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().BINARY_TREE);

  if (!getTree()) {
    const tree = new BinaryTree();
    const values = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6];
    for (const v of values) {
      tree.insert(v);
    }
    setTreeInitialValues(values);
    setTree(tree);
  }
  showTreeResult(getTreeInitialValues(), 'Initial Value');
  setTreeImage();
};

btnInOrderTree.onclick = () => {
  setResultTitle('List tree');
  if (getTree()) {
    const list = [];
    getTree().inOrder(getTree().getRoot(),
        (message) => list.push(message));
    showTreeResult(list, this.document.activeElement.textContent);
  } else {
    alert(`Tree is empty. Please set tree`);
  }
};

btnPreOrderTree.onclick = () => {
  setResultTitle('List tree');
  if (getTree()) {
    const list = [];
    getTree().preOrder(getTree().getRoot(),
        (message) => list.push(message));
    showTreeResult(list, this.document.activeElement.textContent);
  } else {
    alert(`Tree is empty. Please set tree`);
  }
};

btnPostOrderTree.onclick = () => {
  setResultTitle('List tree');
  if (getTree()) {
    const list = [];
    getTree().postOrder(getTree().getRoot(),
        (message) => list.push(message));
    showTreeResult(list, this.document.activeElement.textContent);
  } else {
    alert(`Tree is empty. Please set tree!`);
  }
};

btnClearTree.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);
  setTree(null);
  alert(`Tree has been cleared!`);
};

btnShowGraph.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().GRAPH);

  if (!getGraph()) {
    const graph = new Graph();
    const vertexList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (const v of vertexList) {
      graph.addVertex(v);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('E', 'I');
    setGraphInitialValues(vertexList);
    setGraph(graph);
  }
  showTreeResult(getGraphInitialValues(), '');
  setGraphImage('./../../img/graph.png');
};

btnGraphBFS.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);
  if (getGraph()) {
    const list = [];
    getGraph().breadthFirstSearch(getGraphInitialValues()[0],
        (vertex) => list.push(vertex));
    showTreeResult(list);
    setGraphImage('./../../img/graph-bfs.png');
  } else {
    alert(`Graph is empty. Please set graph!`);
  }
};

btnGraphDFS.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);
  if (getGraph()) {
    const list = [];
    getGraph().depthFirstSearch(getGraphInitialValues()[0],
        (vertex) => list.push(vertex));
    showTreeResult(list);
    setGraphImage('./../../img/graph-dfs.png');
  } else {
    alert(`Graph is empty. Please set graph!`);
  }
};

btnSetAleatoryOrderingNumber.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().ORDERING);

  if (!getOrdering()) {
    const ordering = new Ordering();
    setOrdering(ordering);
    setOrderingValues([Math.floor(Math.random() * 100)]);
  } else {
    getOrderingValues().push(Math.floor(Math.random() * 100));
  }

  showResult(getOrderingValues());
};

btnSetAleatoryOrderingNumber.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  await loadJSFile(getSources().ORDERING);

  if (!getOrdering()) {
    const ordering = new Ordering();
    setOrdering(ordering);
    setOrderingValues([Math.floor(Math.random() * 100)]);
  } else {
    getOrderingValues().push(Math.floor(Math.random() * 100));
  }

  showResult(getOrderingValues());
};

btnBubbleSort.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getOrdering()) {
    getOrdering().bubbleSort(getOrderingValues());
  } else {
    alert(`Ordering is empty. Please set ordering!`);
  }

  showResult(getOrderingValues());
};

btnSelectionSort.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getOrdering()) {
    getOrdering().selectionSort(getOrderingValues());
  } else {
    alert(`Ordering is empty. Please set ordering!`);
  }

  showResult(getOrderingValues());
};

btnInsertionSort.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getOrdering()) {
    getOrdering().insertionSort(getOrderingValues());
  } else {
    alert(`Ordering is empty. Please set ordering!`);
  }

  showResult(getOrderingValues());
};

btnMergeSort.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getOrdering()) {
    setOrderingValues(getOrdering().mergeSort(getOrderingValues()));
  } else {
    alert(`Ordering is empty. Please set ordering!`);
  }

  showResult(getOrderingValues());
};

btnQuickSort.onclick = async () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getOrdering()) {
    getOrdering().quickSort(getOrderingValues());
  } else {
    alert(`Ordering is empty. Please set ordering!`);
  }

  showResult(getOrderingValues());
};
