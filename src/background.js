import {injectScriptIfUrlIsValid} from './libs/utils';

let url = ''

function init() {
  chrome.storage.sync.get({
    url: ''
  }, function(items) {
    url = items.url

    injectScriptIfUrlIsValid(url)
  })
}

init()
