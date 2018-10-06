'use strict';

function findAndRemoveAdElement() {
  console.log('function called to remove ad');
  var findAdElemTopDown = document.querySelector('#app > div > div:nth-child(2) > div > div > div:nth-child(4)');
  var logo = document.querySelector('[data-icon-name="OutlookLogo"]');
  var findAdElemBottomUp;

  if (logo) findAdElemBottomUp = logo.parentNode.parentNode.parentNode;

  if (findAdElemTopDown === findAdElemBottomUp) {
    if (findAdElemTopDown) findAdElemTopDown.parentNode.removeChild(findAdElemTopDown);
  }
}

// call function to remove ad when dom tree has been changed
var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') findAndRemoveAdElement();
  });
});

// observe app dom tree changes
mutationObserver.observe(document.getElementById('app'), {
  childList: true,
  subtree: true
});
