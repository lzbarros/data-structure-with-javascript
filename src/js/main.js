const BI_DIMENSIONAL = 'src/js/arrays/arrays-bidimensional.js';
const TRI_DIMENSIONAL = 'src/js/arrays/arrays-tridimensional.js';
const STACK = 'src/js/stack/stack.js';
const STACK_DECIMAL_TO_BINARY = 'src/js/stack/decimal-to-binary.js';
const STACK_BASE_CONVERTER = 'src/js/stack/base-converter.js';
const QUEUE = 'src/js/queue/queue.js';
const LINKED_LIST = 'src/js/linkedList/linked-list.js';

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
  this.linkedList = linkedList;
};

const getLinkedList = () => {
  return this.linkedList;
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
    alert('Linked List is empty. Please press Set Elements button!');
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

btnBiDimensional.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(BI_DIMENSIONAL,
      () => showResult(biDimensional()));
});

btnTriDimensional.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  loadJSFile(TRI_DIMENSIONAL,
      () => showResult(triDimensional()));
});

btnSetStack.addEventListener('click', () => {
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
});

btnPopStack.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    getStack().getStack().pop();
    showResult(getStack().getStack());
  }
});

btnPeekStack.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult([getStack().peek()]);
  }
});

btnSizeStack.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult([getStack().size()]);
  }
});

btnEmptyStack.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult(['No']);
  } else {
    showResult(['Yes']);
  }
});

btnShowStack.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    showResult(getStack().getStack());
  }
});

btnClearStack.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isStackEmpty()) {
    getStack().clear();
  }
});

btnDecimalToBinary.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);

  if (decimalNumber > 0) {
    loadJSFile(STACK_DECIMAL_TO_BINARY,
        () => showResult([decimalToBinary(decimalNumber)]));
  }
});

btnBaseConverter.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const decimalNumber = window.prompt('Enter decimal number: ', 0);
  const baseNumber = window.prompt('Enter base number: ', 0);

  if (decimalNumber > 0 && baseNumber) {
    loadJSFile(STACK_BASE_CONVERTER,
        () => showResult([baseConverter(decimalNumber, baseNumber)]));
  }
});

btnPriorityEnqueue.addEventListener('click', () => {
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
});

btnEnqueue.addEventListener('click', () => {
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
});

btnDequeue.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    const element = getQueue().dequeue();
    alert(`Element '${element}' has been removed!` );
    showResult(getQueue().getQueue());
  }
});

btnSizeQueue.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    showResult([getQueue().size()]);
  }
});

btnEmptyQueue.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    showResult(['No']);
  } else {
    showResult(['Yes']);
  }
});

btnShowQueue.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    showResult(getQueue().getQueue());
  }
});

btnClearQueue.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isQueueEmpty()) {
    getQueue().clear();
    alert('Queue has been cleared!');
  }
});

btnSetHotPotatoPlayer.addEventListener('click', () => {
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
});

btnShowHotPotatoPlayer.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isPotatoGameQueueEmpty()) {
    showResult(getPotatoGameQueue().getQueue());
  }
});

btnStartHotPotatoGame.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const winner = hotPotatoGame();

  showResult([`The winner is ${winner}`], false);
});

btnClearHotPotatoGame.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isPotatoGameQueueEmpty()) {
    getPotatoGameQueue().clear();
    alert('Hot Potato Game has been cleared!');
  }
});

btnShowLinkedList.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    const result = getLinkedList().toString();

    const resultArr = result ? result.split(',') : result;

    showResult(resultArr);
  }
});

btnSetLinkedList.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by ',' (comma)`, '');

  if (users.length > 0) {
    loadJSFile(LINKED_LIST, () => {
      let linkedlist = {};
      if (!getLinkedList()) {
        linkedlist = new LinkedList();
        setLinkedList(linkedlist);
      } else {
        linkedlist = getLinkedList();
      }

      for (let x = 0; x < users.length; x++) {
        linkedlist.append(users[x]);
      }

      const result = linkedlist.toString();

      const resultArr = result ? result.split(',') : result;

      showResult(resultArr);
    });
  }
});

btnSetLinkedListSpecPos.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  const users = getInputFromUser(`Enter names separated by \',\' (comma)`, '');
  const position = window.prompt('Enter position', 0);

  if (position < 0) {
    alert('Please type a number greather than \'-1\'');
    return;
  }

  if (users.length > 0) {
    loadJSFile(LINKED_LIST, () => {
      let linkedlist = {};
      if (!getLinkedList()) {
        linkedlist = new LinkedList();
        setLinkedList(linkedlist);
      } else {
        linkedlist = getLinkedList();
      }

      for (let x = users.length -1; x >= 0; x--) {
        linkedlist.insert(users[x], position);
      }

      const result = linkedlist.toString();

      const resultArr = result ? result.split(',') : result;

      showResult(resultArr);
    });
  };
});

btnRemoveLinkedListSpecPos.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    const position = window.prompt('Enter position', 0);

    if (position < 0) {
      alert(`Please type a number greather than '-1'`);
    } else {
      showResult([getLinkedList().removeByPosition(position).element]);
    }
  }
});

btnRemoveFirstLinkedList.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    showResult([getLinkedList().removeFirst().element]);
  }
});

btnRemoveLastLinkedList.addEventListener('click', () => {
  setDefaultButtonConfig(this.document.activeElement.textContent);

  if (!isLinkedListEmpty()) {
    showResult([getLinkedList().removeLast().element]);
  }
});
