/**
 * Drum Kit JS
 */

 function DrumKitJS(keys) {
    
    if (!keys) throw new Error('Keys not specified');

    /**
     * @variable DOM Element: Elements to add animations
     */
    this.keys = document.querySelectorAll(keys);
 }

DrumKitJS.prototype.init = function () {
     // Listening to the Keyboard events
    window.addEventListener('keydown', this.playSound);
    this.removeAnimation();
 }

DrumKitJS.prototype.playSound = function (event) {
    this.keyCode = event.keyCode;
    // Selecting the first coincidence of our audio file
    this.audio = document.querySelector(`audio[data-key="${this.keyCode}"]`);
    this.key = document.querySelector(`div[data-key="${this.keyCode}"]`);


    if (!this.audio) return;
    // Rewind the audio element
    this.audio.currentTime = 0;
    this.audio.play();
    this.key.classList.add('playing');
}

DrumKitJS.prototype.removeAnimation = function () {
    this.keys.forEach( element => {
        element.addEventListener('transitionend', (e) => {
            if(e.propertyName !== 'transform') return;
             e.target.classList.remove('playing');
         });
     } );
}