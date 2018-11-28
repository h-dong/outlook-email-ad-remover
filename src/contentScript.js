'use strict';

function findAndRemoveAdElement() {
  if (location.pathname.indexOf('owa') > 0) {
    // mobile
    var findAdElemWithCustomSelector = document.querySelector('.conductorContent .conductorContent .scrollContainer > div:nth-child(2)');
    var findAdElemWithAutoSelector = document.querySelector('._lv_u > div:nth-child(2)');
    
    if (findAdElemWithCustomSelector === findAdElemWithAutoSelector) {
      if (findAdElemWithCustomSelector) findAdElemWithCustomSelector.parentNode.removeChild(findAdElemWithCustomSelector);
    }
  } else {
    // desktop
    var findAdElemTopDown = document.querySelector('#app > div > div:nth-child(2) > div > div > div:nth-child(4)');
    var refElement = document.getElementById('PopoutContainerTarget');
    var findAdElemBottomUp;

    if (refElement && refElement.parentNode && refElement.parentNode.children[0] && refElement.parentNode.children[0].children[0]) {
      findAdElemBottomUp = refElement.parentNode.children[0].children[0].children[3];
    }

    if (findAdElemTopDown === findAdElemBottomUp) {
      if (findAdElemTopDown) findAdElemTopDown.parentNode.removeChild(findAdElemTopDown);
    }
  }
}

// call function to remove ad when dom tree has been changed
var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') findAndRemoveAdElement();
  });
});

var elementToMonitor = (location.pathname.indexOf('owa') > 0) ? document.body : document.getElementById('app');

// observe app dom tree changes
mutationObserver.observe(elementToMonitor, {
  childList: true,
  subtree: true
});
