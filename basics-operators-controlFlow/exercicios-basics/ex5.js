function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
    let exceededSpeed;
    let points;

    if (speed < speedLimit + kmPerPoint) {
        return "Ok";
    } else if (speed > speedLimit && speed < 180) {
        exceededSpeed = speed - speedLimit;
        points = exceededSpeed / 5;
        return "Points: " + Math.floor(points);
    } else {
        return "License suspended";
    }
}

const functionSpeed = checkSpeed(75);
console.log(functionSpeed);