"use strict";

const path = require('path');
const globalStyles = path.join(__dirname, 'global.css');

setInterval(() => {
  document.querySelector("._lz6s.Hz2lF").style.display = "none";
  document.querySelector(".t30g8.L1C6I").style.paddingTop = 0;
  document.querySelector(".i0EQd").style.maxWidth = 'unset !important';
}, 3000);

module.exports = (Franz) => {
  const getMessages = () => {
    let count = 0;
    const elements = document.querySelectorAll('.rBNOH.soMvl');
    if (elements.length) {
      count += 1;
    }
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);

  Franz.injectCSS(globalStyles);
};
