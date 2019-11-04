chrome.runtime.onMessage.addListener( (msg, sender, sendResponse) => {
  console.log('content script listener');
  // If the received message has the expected format...
  if (msg.text === 'get_metadata') {
    // Call the specified callback, passing
    // the web-page's DOM content as argument
    sendResponse(document.all[0].outerHTML);
  }
});
