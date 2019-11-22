const BI_DIMENSIONAL = 'src/js/arrays/arrays-bidimensional.js';
const TRI_DIMENSIONAL = 'src/js/arrays/arrays-tridimensional.js';
const STACK = 'src/js/stack/stack.js';
const STACK_DECIMAL_TO_BINARY = 'src/js/stack/decimal-to-binary.js';
const STACK_BASE_CONVERTER = 'src/js/stack/base-converter.js';
const QUEUE = 'src/js/queue/queue.js';
const getLinkedListSource = {
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
};
const getElementById = (elementId) => document.getElementById(elementId);

const btnBiDimensional = getElementById('btnBiDimensional');
const btnTriDimensional = getElementById('btnTriDimensional');

const btnSetStack = getElementById('btnSetStack');
const btnPeekStack = getElementById('btnPeekStack');
const btnSizeStack = getElementById('btnSizeStack');
const btnEmptyStack = getElementById('btnEmptyStack');
const btnShowStack = getElementById('btnShowStack');
const btnClearStack = getElementById('btnClearStack');

const btnDecimalToBinary = getElementById('btnDecimalToBinary');
const btnBaseConverter = getElementById('btnBaseConverter');

const btnPriorityEnqueue = getElementById('btnPriorityEnqueue');
const btnEnqueue = getElementById('btnEnqueue');
const btnDequeue = getElementById('btnDequeue');
const btnSizeQueue = getElementById('btnSizeQueue');
const btnEmptyQueue = getElementById('btnEmptyQueue');
const btnShowQueue = getElementById('btnShowQueue');
const btnClearQueue = getElementById('btnClearQueue');

const btnSetHotPotatoPlayer = getElementById('btnSetHotPotatoPlayer');
const btnShowHotPotatoPlayer = getElementById('btnShowHotPotatoPlayer');
const btnStartHotPotatoGame = getElementById('btnStartHotPotatoGame');
const btnClearHotPotatoGame = getElementById('btnClearHotPotatoGame');

const btnShowLinkedList = getElementById('btnShowLinkedList');
const btnSetLinkedList = getElementById('btnSetLinkedList');
const btnSetLinkedListSpecPos = getElementById('btnSetLinkedListSpecPos');
const btnRemoveLinkedListSpecPos = getElementById('btnRemoveLinkedListSpecPos');
const btnRemoveFirstLinkedList = getElementById('btnRemoveFirstLinkedList');

const loadJSFile = (source = '', callback) => {
  const scriptArr = document.body.getElementsByTagName('script');
  let addJSFile = true;

  for (x = 0; x < scriptArr.length; x++) {
    if (scriptArr[x].getAttribute('src') === source) {
      addJSFile = false;
      break;
    }
  }

  if (addJSFile) {
    const scriptElement = document.createElement('script');
    scriptElement.onload = () => callback();
    scriptElement.src = source;
    document.body.appendChild(scriptElement);
  } else {
    callback();
  }
};

const setResultTitle = (titleText) => {
  const titleElement = getElementById('resultTitle');

  titleElement.innerHTML = titleText;
};

const clearResult = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const showResult = (arr = []) => {
  const resultElement = getElementById('result');
  const ul = document.createElement('ul');
  resultElement.appendChild(ul);
  for (let x = 0; x < arr.length; x++) {
    const li = document.createElement('li');
    li.innerHTML = arr[x];

    ul.appendChild(li);
  }
};

const showResultUsingButton = (arr = []) => {
  const resultElement = getElementById('result');
  const ul = document.createElement('ul');
  resultElement.appendChild(ul);
  for (let x = 0; x < arr.length; x++) {
    const li = document.createElement('li');
    const btnShowIndexOf = document.createElement('button');
    btnShowIndexOf.setAttribute('id', `btnShowIndexOf${x}`);
    btnShowIndexOf.onclick = () => showLinkedListIndexOf(this);
    btnShowIndexOf.textContent = arr[x];
    const btnRemoveByPosition = document.createElement('button');
    btnRemoveByPosition.setAttribute('id', `btnRemoveByPosition${x}`);
    btnRemoveByPosition.onclick = () => removeLinkedListByPosition(arr[x]);
    btnRemoveByPosition.style.backgroundColor = 'red';
    btnRemoveByPosition.style.color = 'white';
    btnRemoveByPosition.style.fontWeight = 'bold';
    btnRemoveByPosition.textContent = 'X';

    li.appendChild(btnShowIndexOf);
    li.appendChild(btnRemoveByPosition);
    ul.appendChild(li);
  }
};

const setDefaultButtonConfig = (elementText) => {
  setResultTitle(elementText);

  clearResult(getElementById('result'));
};

const setStack = (stack) => {
  this.stack = stack;
};

const getStack = () => {
  return this.stack;
};

const getQueue = () => {
  return this.queue;
};

const setQueue = (queue) => {
  this.queue = queue;
};

const getPotatoGameQueue = () => {
  return this.potatoGameQueue;
};

const setPotatoGameQueue = (potatoGameQueue) => {
  this.potatoGameQueue = potatoGameQueue;
};

const setLinkedList = (linkedList) => {
  getLinkedListSource[getSelectedLinkedList()].setLinkedList(linkedList);
};

const getLinkedList = () => {
  return getLinkedListSource[getSelectedLinkedList()].getLinkedList();
};

const isStackEmpty = () => {
  if (getStack() && !getStack().isEmpty()) {
    return false;
  } else {
    alert('Stack is empty. Please set aleatory numbers');
    return true;
  }
};

const isQueueEmpty = () => {
  if (getQueue() && !getQueue().isEmpty()) {
    return false;
  } else {
    alert('Queue is empty. Please press Enqueue button!');
    return true;
  }
};

const isPotatoGameQueueEmpty = () => {
  if (getPotatoGameQueue() && !getPotatoGameQueue().isEmpty()) {
    return false;
  } else {
    alert('Hot Potato is empty. Please press Set Players (Hot Potato) button!');
    return true;
  }
};

const isLinkedListEmpty = () => {
  if (getLinkedList() && !getLinkedList().isEmpty()) {
    return false;
  } else {
    const selectElement = document.getElementById('linkedListSelect');
    const label = selectElement[selectElement.selectedIndex].label;
    alert(`${label} is empty. Please press Set Elements button!`);
    return true;
  }
};

const hotPotatoGame = () => {
  const randomRounds = Math.floor(Math.random() * 100);

  showResult([`Number of rounds: ${randomRounds}`]);

  while (getPotatoGameQueue().size() > 1) {
    for (let x = 0; x < randomRounds; x++) {
      getPotatoGameQueue().enqueue(getPotatoGameQueue().dequeue());
    }

    showResult([`${getPotatoGameQueue().dequeue()} was eliminated!`]);
  }

  return getPotatoGameQueue().dequeue();
};

const getInputFromUser = (textMessage, initialValue) => {
  const inputUsers = window.prompt(textMessage, initialValue);
  let users = [];
  if (inputUsers) {
    users = inputUsers.split(',');
  }
  return users;
};

const showLinkedListIndexOf = (element) => {
  const elementText = element.document.activeElement.textContent;
  /* Position plus 1 to user`s view */
  const position = getLinkedList().indexOf(elementText.replace(/ /g, '')) + 1;
  const text = `Index of '${elementText}' is ` +
    `${position}`;

  alert(text);
};

const removeLinkedListByPosition = (elementText) => {
  const elementTextWithReplace = elementText.replace(/ /g, '');
  const position = getLinkedList().indexOf(elementTextWithReplace);
  getLinkedList().removeByPosition(position);
  const text = `${elementTextWithReplace} has been removed!`;

  alert(text);

  const result = getLinkedList().toString();

  const resultArr = result ? result.split(',') : result;

  clearResult(getElementById('result'));

  showResultUsingButton(resultArr);
};

const getSelectedLinkedList = () => {
  return document.getElementById('linkedListSelect').value;
};

btnBiDimensional.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(BI_DIMENSIONAL,
      () => showResult(biDimensional()));
};

btnTriDimensional.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(TRI_DIMENSIONAL,
      () => showResult(triDimensional()));
};

btnSetStack.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(STACK, () => {
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
    loadJSFile(STACK_DECIMAL_TO_BINARY,
        () => showResult([decimalToBinary(decimalNumber)]));
  }
};

btnBaseConverter.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);
  const baseNumber = window.prompt('Enter base number: ', 0);

  if (decimalNumber > 0 && baseNumber) {
    loadJSFile(STACK_BASE_CONVERTER,
        () => showResult([baseConverter(decimalNumber, baseNumber)]));
  }
};

btnPriorityEnqueue.onclick = () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser('Enter names separated by \',\' (comma) ', '');
  const priority = window.prompt('Enter priority', 0);

  if (users.length > 0) {
    loadJSFile(QUEUE, () => {
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
    loadJSFile(QUEUE, () => {
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
    loadJSFile(QUEUE, () => {
      let potatoGameQueue = {};
      if (!getQueue()) {
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
    const linkedListSource = getLinkedListSource[getSelectedLinkedList()];
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
    const linkedListSource = getLinkedListSource[getSelectedLinkedList()];
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
