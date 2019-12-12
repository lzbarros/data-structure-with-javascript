/* eslint-disable no-unused-vars */

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

const getLinkedList = () => {
  return getSources().getLinkedListSource[
      getSelectedLinkedList()].getLinkedList();
};

const setLinkedList = (linkedList) => {
  getSources().getLinkedListSource[
      getSelectedLinkedList()].setLinkedList(linkedList);
};

const getSetElement = () => {
  return this.setElement;
};

const setSetElement = (setElement) => {
  return this.setElement = setElement;
};

const getHashTable = () => {
  return this.hashTable;
};

const setHashTable = (hashTable) => {
  return this.hashTable = hashTable;
};

const getTree = () => {
  return this.tree;
};

const setTree = (tree) => {
  return this.tree = tree;
};

const getTreeInitialValues = () => {
  return this.treeInitialValues;
};

const setTreeInitialValues = (treeInitialValues) => {
  return this.treeInitialValues = treeInitialValues;
};

const getGraph = () => {
  return this.graph;
};

const setGraph = (graph) => {
  return this.graph = graph;
};

const getGraphInitialValues = () => {
  return this.graphInitialValues;
};

const setGraphInitialValues = (graphInitialValues) => {
  return this.graphInitialValues = graphInitialValues;
};

const getOrdering = () => {
  return this.ordering;
};

const setOrdering = (ordering) => {
  return this.ordering = ordering;
};

const getOrderingValues = () => {
  return this.orderingValues;
};

const setOrderingValues = (orderingValues) => {
  return this.orderingValues = orderingValues;
};

const getElementById = (elementId) => document.getElementById(elementId);

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

const showTreeResult = (arr = [], orderType = '') => {
  const resultElement = getElementById('result');
  const title = document.createElement('h5');
  title.innerHTML = orderType;
  resultElement.appendChild(title);
  const ul = document.createElement('ul');
  ul.style.listStyleType = 'none';
  resultElement.appendChild(ul);
  for (let x = 0; x < arr.length; x++) {
    const li = document.createElement('li');
    li.style.float = 'left';
    li.style.marginLeft = '2px';
    li.style.color = orderType === 'Initial Value' ? 'blue' : 'green';
    li.innerHTML = ` (${arr[x]}) `;

    ul.appendChild(li);
  }
  ul.appendChild(document.createElement('br'));
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

  clearResult(getElementById('hashTableElement'));
  clearResult(getElementById('result'));
  clearResult(getElementById('treeImage'));
  clearResult(getElementById('graphImage'));
};

const passObjectWithoutReference = (object) => {
  return JSON.parse(JSON.stringify(object));
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

const startHotPotatoGame = () => {
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

const showHashTableElements = () => {
  const elements = [];
  for (const value of getHashTable().getTable()) {
    if (value) {
      elements.push(value);
    }
  }

  showResult(elements);
};

const setHashTableElement = () => {
  const div = getElementById('hashTableElement');

  const inputKey = document.createElement('input');
  inputKey.setAttribute('id', 'inputKey');
  inputKey.setAttribute('placeholder', 'Insert Key');
  inputKey.setAttribute('type', 'string');

  const inputValue = document.createElement('input');
  inputValue.setAttribute('id', 'inputValue');
  inputValue.setAttribute('placeholder', 'Insert Value');
  inputValue.setAttribute('type', 'string');
  inputValue.style.marginLeft = '2px';
  inputValue.onkeyup = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();

      saveHashTableElement(getElementById('inputKey').value,
          getElementById('inputValue').value);
    }
  };

  const buttonSave = document.createElement('button');
  buttonSave.setAttribute('id', 'btnSaveHashTableElement');
  buttonSave.onclick = () => {
    saveHashTableElement(getElementById('inputKey').value,
        getElementById('inputValue').value);
  };
  buttonSave.textContent = 'Save element';
  buttonSave.style.marginLeft = '2px';

  div.appendChild(inputKey);
  div.appendChild(inputValue);
  div.appendChild(buttonSave);
};

const saveHashTableElement = (key, value) => {
  getHashTable().put(key, value);

  clearResult(getElementById('result'));

  showHashTableElements();

  getElementById('inputKey').value = '';
  getElementById('inputValue').value = '';
  getElementById('inputKey').focus();
};

const removeHashTableElement = () => {
  const div = getElementById('hashTableElement');

  const inputRemoveKey = document.createElement('input');
  inputRemoveKey.setAttribute('id', 'inputRemoveKey');
  inputRemoveKey.setAttribute('placeholder', 'Remove by Key');
  inputRemoveKey.setAttribute('type', 'string');

  const buttonRemove = document.createElement('button');
  buttonRemove.setAttribute('id', 'btnRemoveHashTableElement');
  buttonRemove.onclick = () => {
    removeHashTable(getElementById('inputRemoveKey').value);
  };
  buttonRemove.textContent = 'Remove element';
  buttonRemove.style.marginLeft = '2px';

  div.appendChild(inputRemoveKey);
  div.appendChild(buttonRemove);

  showHashTableElements();
};

const removeHashTable = (key) => {
  if (getHashTable().remove(key)) {
    clearResult(getElementById('result'));

    showHashTableElements();
  } else {
    alert(`Key: ${key} not found!`);
  }
};

const getHashTableElement = () => {
  const div = getElementById('hashTableElement');

  const inputSearchByKey = document.createElement('input');
  inputSearchByKey.setAttribute('id', 'inputSearchByKey');
  inputSearchByKey.setAttribute('placeholder', 'Search by Key');
  inputSearchByKey.setAttribute('type', 'string');

  const buttonSearch = document.createElement('button');
  buttonSearch.setAttribute('id', 'btnSearchHashTableElement');
  buttonSearch.onclick = () => {
    searchHashTableElement(getElementById('inputSearchByKey').value);
  };
  buttonSearch.textContent = 'Search element';
  buttonSearch.style.marginLeft = '2px';

  div.appendChild(inputSearchByKey);
  div.appendChild(buttonSearch);
};

const searchHashTableElement = (key) => {
  const element = getHashTable().get(key);

  if (element) {
    showResult([element.toString()]);
  } else {
    alert(`Key: ${key} not found!`);
  }
};

const setTreeImage = () => {
  const div = getElementById('treeImage');

  const img = new Image();
  img.src = './../../img/tree.png';

  div.appendChild(img);
};

const setGraphImage = (source) => {
  const div = getElementById('graphImage');

  const img = new Image();
  img.src = source;

  div.appendChild(img);
};
