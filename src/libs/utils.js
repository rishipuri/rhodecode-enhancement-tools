export const injectScriptIfUrlIsValid = url => {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.status === "complete" && tab.url.indexOf(url) === 0) {
      console.log(url)

      chrome.tabs.executeScript(tabId, {
        file: 'content.js',
        runAt: 'document_end'
      });

      chrome.tabs.insertCSS(tabId, {
        file: 'content.css',
        runAt: 'document_end'
      })
    }
  })
}
