/* eslint-disable no-unused-vars */
const loadJSFile = (source = '') => {
  return new Promise((resolve, reject) => {
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
      scriptElement.src = source;
      scriptElement.onload = () => resolve();
      document.body.appendChild(scriptElement);
    } else {
      resolve();
    }
  });
};
loadJSFile('src/js/utils/sources.js');
loadJSFile('src/js/utils/behaviors.js');
loadJSFile('src/js/utils/buttons.js');

