function distanceFromHqInBlocks(location){
if (location > 42) {
    return location - 42
}
if (location < 42){
    return 42 - location
}
}
function distanceFromHqInFeet(location){
    if (location > 42) {
        return (location - 42) * 264
    }
    if (location < 42){
        return (42 - location) * 264
    }
}
function distanceTravelledInFeet(pickup, dropoff){
    if (pickup < dropoff) {
        return (dropoff - pickup) * 264
    }
    if (pickup > dropoff){
        return (pickup - dropoff) * 264
    }
}
function calculatesFarePrice(beginning, end){
    const distance = distanceTravelledInFeet(beginning, end)
    if (distance < 400){
        return 0
    }
    if (distance >= 400 && distance <= 2000){
        return (distance - 400) * .02
    }
    if (distance > 2500){
        return ('cannot travel that far')
    }
    if (distance > 2000){
        return 25
    }
}