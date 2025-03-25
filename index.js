// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation){
    if (pickupLocation > 42) {
        return pickupLocation - 42;
    } else {
        return 42 - pickupLocation;
    }
}

function distanceFromHqInFeet (pickupLocation){ 
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}


function distanceTravelledInFeet (start, destination){
 const distance = (start -  destination);
return Math.abs(distance) * 264;
}

function calculatesFarePrice (start, destination){
    const distance = (destination - start);
    if (distance <= 400){
 return 0 ;
    } else if ( distance > 400 && distance <=2000){
        return (distance - 400)*0.02;
    } 
 if (distance > 2000 ){
    return 25;
 } else if (distance > 2500) {
    return "cannot travel that far";
 }
}