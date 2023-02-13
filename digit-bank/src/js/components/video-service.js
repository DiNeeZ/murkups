const videoBlock = document.querySelector(".service-top__video-block");

if (videoBlock) {
  const video = videoBlock.querySelector(".service-top__video");
  const playBtn = videoBlock.querySelector(".service-top__play-btn");

  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    videoBlock.classList.add("video-block--played");
    video.play();
    video.controls = true;
    playBtn.classList.add("video-block__play--played");
  });

  video.onpause = function () {
    videoBlock.classList.remove("video-block--played");
    video.controls = false;
    playBtn.classList.remove("video-block__play--played");
  };
}
