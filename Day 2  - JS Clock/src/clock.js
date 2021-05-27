/**
 * Clock JS Class
 */

class ClockJs {
    constructor(secondHand, minutesHand, hoursHand) {
        this.secondsHand = secondHand;
        this.minutesHand = minutesHand;
        this.hoursHand = hoursHand;
        
    }

    init() {
        setInterval(() => this.setDate(), 1000);
    }

    setDate() {
        
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsToDegrees = this.timeToDegrees(seconds, 60);

        this.secondsHand.style.transform = this.animationAngle(secondsToDegrees);

        const mins = now.getMinutes();
        const minsToDegrees = this.timeToDegrees(mins, 60);
        this.minutesHand.style.transform = this.animationAngle(minsToDegrees);

        const hour = now.getHours();
        const hourToDegrees = this.timeToDegrees(hour, 12);
        this.hoursHand.style.transform = this.animationAngle(hourToDegrees);
    }

    timeToDegrees(divisor, dividend) {
        return ((divisor / dividend) * 360) + 90;
    }

    animationAngle(degrees) {
        return `rotate(${degrees}deg)`;
    }

}

export default ClockJs;