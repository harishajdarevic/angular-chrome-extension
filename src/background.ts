chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
      chrome.pageAction.show(id);
    });
  }, { url: [{ urlMatches: 'staging.e-business.cloud' }] });
});

// A function to use as callback
function getClientMetadata(domContent) {
  console.log('I received the following DOM content:\n' + domContent);
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener( (tab) => {
  // ...check the URL of the active tab against our pattern and...
    console.log('adding listeneter to tab');
    // ...if it matches, send a message specifying a callback too
    chrome.tabs.sendMessage(tab.id, {text: 'get_metadata'}, getClientMetadata);

});
