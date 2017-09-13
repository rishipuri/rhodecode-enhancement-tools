function save_options() {
  const url = document.getElementById('url').value
  chrome.storage.sync.set({
    url: url
  }, function() {
    const status = document.getElementById('status')
    status.textContent = 'Options saved.'
    setTimeout(function() {
      status.textContent = ''
    }, 500)
  })
}

function restore_options() {
  chrome.storage.sync.get({
    url: ''
  }, function(items) {
    document.getElementById('url').value = items.url
  })
}
document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
