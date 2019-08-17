// console.log('I am PIP');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let video = getVideo();
  if (request.action === 'open-pip' && video) {
    video[0].requestPictureInPicture();
  } else if (request.action === 'close-pip' && video) {
    video[0].exitPictureInPicture();
  }
})

function getVideo () {
  let url = document.location.href;
  if (url.match(/^.*bilibili\.com\/video\/av[0-9]+$/i)) {
    // bilibili
    let video = document.getElementsByTagName('video');
    if (video) {
      video[0].requestPictureInPicture();
    }
    return video;
  } else if (url.match(/^.*egame.qq.com\/[0-9]+$/i)) {
    // egame
    let video = document.getElementsByTagName('video');
    if (video) {
      video[0].requestPictureInPicture();
    }
    return video;
  }
}