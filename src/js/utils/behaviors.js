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

const getLinkedList = () => {
  return getSources().getLinkedListSource[
      getSelectedLinkedList()].getLinkedList();
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
