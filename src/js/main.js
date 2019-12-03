/* eslint-disable no-unused-vars */
const loadJSFile = (source = '', callback = () => {}) => {
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
    if (callback) {
      scriptElement.onload = () => callback();
    }
    scriptElement.src = source;
    document.body.appendChild(scriptElement);
  } else {
    if (callback) {
      callback();
    }
  }
};
loadJSFile('src/js/utils/sources.js');
loadJSFile('src/js/utils/behaviors.js');
loadJSFile('src/js/utils/buttons.js');

