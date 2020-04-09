"use strict";

const path = require('path');

module.exports = Franz => {
  const getMessages = () => {
    let count = 0;
    const elements = document.querySelectorAll('.rBNOH.soMvl');
    if (elements.length) {
      count += 1;
    }
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
