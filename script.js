const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const rewindBtn = player.querySelector('.rewind');
const forwardBtn = player.querySelector('.forward');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  const icon = video.paused ? '►' : '❚❚';
  toggle.textContent = icon;
}

// Skip buttons
function rewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}
function forward() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

// Volume control
function handleVolume() {
  video.volume = this.value;
}

// Playback speed control
function handleSpeed() {
  video.playbackRate = this.value;
}

// Progress bar update
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub (click on progress bar)
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

rewindBtn.addEventListener('click', rewind);
forwardBtn.addEventListener('click', forward);

volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);

progress.addEventListener('click', scrub);
