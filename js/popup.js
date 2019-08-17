document.getElementById('toggleBtn').addEventListener('click', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, (tabs) => {
    console.log(tabs[0].id);
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'open-pip'
    });
  });
});