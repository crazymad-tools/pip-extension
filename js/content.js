// console.log('I am PIP');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'open-pip') {
    let video = document.getElementsByTagName('video');
    if (video) {
      video[0].requestPictureInPicture();
    }
  } else if (request.action === 'close-pip') {
    let video = document.getElementById('video');
    if (video) {
      video[0].exitPictureInPicture();
    }
  }
})