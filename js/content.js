console.log('I sm pip');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let video = getVideo();
  console.log(video);
  if (request.action === 'open-pip' && video) {
    video[0].requestPictureInPicture();
  } else if (request.action === 'close-pip' && video) {
    video[0].exitPictureInPicture();
  }
})

function getVideo () {
  let url = document.location.href;
  console.log(url);
  if (url.match(/^.*bilibili\.com\/video\/av[0-9]+.*$/i)) {
    // bilibili
    console.log('bilibili');
    let video = document.getElementsByTagName('video');
    console.log(video);
    if (video) {
      video[0].requestPictureInPicture();
    }
    return video;
  } else if (url.match(/.*egame.qq.com\/[0-9]+.*$/i)) {
    // egame
    let video = document.getElementsByTagName('video');
    if (video) {
      video[0].requestPictureInPicture();
    }
    return video;
  }
}