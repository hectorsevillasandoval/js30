/**
 * Clock JS - Prototype Day 2
 */

function ClockJs(secondsHand, minutesHand, hoursHand) {

    if (!(secondsHand && minutesHand && hoursHand)) throw new Error('send the proper data');
    this.secondsHand = secondHand;
    this.minutesHand = minutesHand;
    this.hoursHand = hoursHand;
    this.now = '';

    setInterval(this.setDate.bind(this), 1000);
    

}

ClockJs.prototype.setDate = function () {
    this.now = new Date();
    this.seconds = this.now.getSeconds();
    this.secondsToDegrees = this.timeToDegrees(this.seconds, 60);

    this.secondsHand.style.transform = this.animationAngle(this.secondsToDegrees);

    this.mins = this.now.getMinutes();
    this.minsToDegrees = this.timeToDegrees(this.mins, 60);
    this.minutesHand.style.transform = this.animationAngle(this.minsToDegrees);

    this.hour = this.now.getHours();
    this.hourToDegrees = this.timeToDegrees(this.hour, 12);
    this.hoursHand.style.transform = this.animationAngle(this.hourToDegrees);
}

ClockJs.prototype.timeToDegrees = function(divisor, dividend) {
    return ((divisor / dividend) * 360) + 90;
}

ClockJs.prototype.animationAngle = function ( degrees ) {
    return `rotate(${degrees}deg)`;
}