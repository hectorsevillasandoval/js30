/** Get Our Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

console.log(video);
/** Built out our functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '⏸️';
    toggle.textContent = icon;
}

function skip() {
    const { skip } = this.dataset;
    video.currentTime += parseFloat(skip);
    console.log(skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}
function handleProgress() {
    
}

toggle.addEventListener( 'click', togglePlay );
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
skipButtons.forEach(element => {
    element.addEventListener('click', skip);
});
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

ranges.forEach( range => range.addEventListener('mousemove', handleRangeUpdate) );