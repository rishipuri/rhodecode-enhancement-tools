let url = ''

function init() {
  chrome.storage.sync.get({
    url: ''
  }, function(items) {
    url = items.url

    injectScriptIfUrlIsValid(url)
  })
}

function injectScriptIfUrlIsValid(url) {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.status === "complete" && tab.url.indexOf(url) === 0) {
      console.log(url)

      chrome.tabs.executeScript(tabId, {
        file: 'content.js',
        runAt: 'document_start'
      })
    }
  })
}

init()
