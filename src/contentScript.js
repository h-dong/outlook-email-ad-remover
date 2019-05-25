'use strict';

function findAndRemoveAdElement() {
  if (location.pathname.indexOf('owa') > 0) {
    // mobile
    var findAdElemWithCustomSelector = document.querySelector('.conductorContent .conductorContent .scrollContainer > div:nth-child(2)');
    var findAdElemWithAutoSelector = document.querySelector('._lv_u > div:nth-child(2)');
    
    if (findAdElemWithCustomSelector === findAdElemWithAutoSelector) {
      if (findAdElemWithCustomSelector) findAdElemWithCustomSelector.style.display = "none";
    }
  } else {
    // desktop
    var navigationPanel = document.querySelector('[aria-label="Navigation pane"]');

    if (window.innerWidth > 989) {
      // large screens
      var wrapperNode = navigationPanel.parentNode;

      if (wrapperNode.childElementCount === 4) {
        var adPanel = wrapperNode.lastChild;
    
        if (adPanel) adPanel.style.display = "none";
      }
    } else {
      // small screens
      var wrapperNode = navigationPanel.parentNode.parentNode;

      if (wrapperNode.childElementCount === 2) {
        var adPanel = wrapperNode.lastChild;
    
        if (adPanel) adPanel.style.display = "none";
      }
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
