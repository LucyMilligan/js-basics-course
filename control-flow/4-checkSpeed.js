// check speed - takes speed as input
// speed limit = 70km/hr, therefore return 'Ok'
// for every 5 km over 70km/hr, give driver 1 point (Point: 1)
// use Math.floor()
// if a driver has >= 12 points - 'Licence suspended'

const driver = checkSpeed(133)
console.log(driver)

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5
    let points = 0

    if (speed > speedLimit)
        points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if ((points > 0) && (points < 12))
        return `Points: ${points}`;
    
    if (points >= 12) return 'Licence suspended';
        
    return 'Ok';
}
