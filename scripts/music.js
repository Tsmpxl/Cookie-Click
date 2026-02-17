const musicButEl = document.querySelector('.js-music-button');
const audioEl = document.querySelector('.js-audio');

let isPlaying = false;
audioEl.volume = 0.8;

musicButEl.addEventListener('click', () => {
  if (!isPlaying) {
    audioEl.play();
    musicButEl.classList.remove('off');
    musicButEl.classList.add('on');
  } else {
    audioEl.pause();
    audioEl.currentTime = 0;
    musicButEl.classList.remove('on');
    musicButEl.classList.add('off');
  }
  isPlaying = !isPlaying;
});

  audioEl.addEventListener('ended', () => {
  musicButEl.classList.remove('on');
  musicButEl.classList.add('off');
  musicButEl.textContent = "Play Music";
  isPlaying = false;
});