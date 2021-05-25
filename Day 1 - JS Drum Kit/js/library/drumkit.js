/**
 * Refactoring the Drum Kit Project using modules
 */

class DrumKit {
    constructor(keys) {
        this.keys = keys;
        this.keyboardKeys = document.querySelectorAll(keys);
        this.audioElement = '';
        this.keyCode = '';
        this.currentKey = '';
    }

    /**
     * Initialize DrumKit Library
     */
    init() {
        window.addEventListener('keydown', this.playSound);
        this.removeAnimation();
    }

    /**
     * Play Audio Element
     */
    playSound(event) {
        this.keyCode = event.keyCode;
        this.audioElement = document.querySelector(`audio[data-key="${this.keyCode}"]`);
        this.currentKey = document.querySelector(`div[data-key="${this.keyCode}"]`);

        // cancel the execution of the fn if the keycode doesnt exist
        if( !this.audioElement ) return;
        this.audioElement.currentTime = 0;
        this.audioElement.play();
        this.currentKey.classList.add('playing');
    }

    /**
     * Remove class when animation ends
     */
    removeAnimation() {
        this.keyboardKeys.forEach(element => {
            element.addEventListener('transitionend', (e) => {
                        if(e.propertyName !== 'transform') return;
                         e.target.classList.remove('playing');
                     });
        } );
    }
}

export default DrumKit;