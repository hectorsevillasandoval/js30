/**
 * Clock JS - Prototype Day 2
 */

function ClockJs(secondsHand, minutesHand, hoursHand) {

    if (!(secondsHand && minutesHand && hoursHand)) throw new Error('send the proper data');
    this.secondsHand = secondHand;
    this.minutesHand = minutesHand;
    this.hoursHand = hoursHand;
   

    setInterval(() => this.setDate(), 1000);
    

}

ClockJs.prototype.setDate = function () {
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

ClockJs.prototype.timeToDegrees = function(divisor, dividend) {
    return ((divisor / dividend) * 360) + 90;
}

ClockJs.prototype.animationAngle = function ( degrees ) {
    return `rotate(${degrees}deg)`;
}