/* eslint-disable no-invalid-this */
btnBiDimensional.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(getSources().BI_DIMENSIONAL,
      () => showResult(biDimensional()));
};

btnTriDimensional.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(getSources().TRI_DIMENSIONAL,
      () => showResult(triDimensional()));
};

btnSetStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(getSources().STACK, () => {
    if (!getStack()) {
      const stack = new Stack([Math.floor(Math.random() * 100)]);
      setStack(stack);
    } else {
      getStack().push(Math.floor(Math.random() * 100));
    }

    showResult(stack.getStack());
  });
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

btnDecimalToBinary.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);

  if (decimalNumber > 0) {
    loadJSFile(getSources().STACK_DECIMAL_TO_BINARY,
        () => showResult([decimalToBinary(decimalNumber)]));
  }
};

btnBaseConverter.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);
  const baseNumber = window.prompt('Enter base number: ', 0);

  if (decimalNumber > 0 && baseNumber) {
    loadJSFile(getSources().STACK_BASE_CONVERTER,
        () => showResult([baseConverter(decimalNumber, baseNumber)]));
  }
};

btnPriorityEnqueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser('Enter names separated by \',\' (comma) ', '');
  const priority = window.prompt('Enter priority', 0);

  if (users.length > 0) {
    loadJSFile(getSources().QUEUE, () => {
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
    });
  }
};

btnEnqueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser('Enter names separated by \',\' (comma) ', '');

  if (users.length > 0) {
    loadJSFile(getSources().QUEUE, () => {
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
    });
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

btnSetHotPotatoPlayer.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  if (users.length > 0) {
    loadJSFile(getSources().QUEUE, () => {
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
    });
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

  const winner = hotPotatoGame();

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
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    const result = getLinkedList().toString();

    const resultArr = result ? result.split(',') : result;

    showResultUsingButton(resultArr);
  }
};

btnSetLinkedList.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  if (users.length > 0) {
    const linkedListSource = getSources().getLinkedListSource[
        getSelectedLinkedList()];
    loadJSFile(linkedListSource.source, () => {
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
    });
  }
};

btnSetLinkedListSpecPos.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

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
    loadJSFile(linkedListSource.source, () => {
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
    });
  };
};

btnRemoveLinkedListSpecPos.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

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
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    showResult([`${getLinkedList().removeFirst().element} 
      has been removed!`]);
  }
};

btnRemoveLastLinkedList.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    showResult([`${getLinkedList().removeLast().element} 
      has been removed!`]);
  }
};

btnFillFirstSet.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  loadJSFile(getSources().SET, () => {
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
  });
};

btnFillSecondSet.onclick = () => {
  setResultTitle(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  loadJSFile(getSources().SET, () => {
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
  });
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

btnSetHashTable.onclick = () => {
  clearResult(getElementById('hashTableElement'));
  setResultTitle(this.document.activeElement.textContent);

  loadJSFile(getSources().HASH_TABLE, () => {
    loadJSFile(getSources().getLinkedListSource['LINKED_LIST'].source);

    if (!getHashTable()) {
      setHashTable(new HashTable());
    }

    setHashTableElement();
  });
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
  clearResult(getElementById('hashTableElement'));

  if (getHashTable() && getHashTable().size() > 0) {
    showHashTableElements();
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};

btnClearHashTable.onclick = () => {
  clearResult(getElementById('hashTableElement'));
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getHashTable()) {
    setHashTable(new HashTable());
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};

btnGetHashTable.onclick = () => {
  clearResult(getElementById('hashTableElement'));
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (getHashTable()) {
    getHashTableElement();
  } else {
    alert(`HashTable is empty. Please set elements`);
  }
};
