// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(pickuplocation){
    return Math.abs(pickuplocation-hq);

}
// distanceFromHqInBlocks(41);

function distanceFromHqInFeet(pickuplocation){

    return distanceFromHqInBlocks(pickuplocation)*264;
}
function  distanceTravelledInFeet(start,destination){
    //returns the number of feet traveled
    return Math.abs(start-destination)*264;

}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceInFeet = distanceTravelledInFeet(start,destination);
    if (distanceInFeet <= 400){
        return 0;
    }
    else if(distanceInFeet > 400 && distanceInFeet <=2000){
        let totalDistance = Math.abs(distanceInFeet - 400);

        return totalDistance * 0.02;
    }
    else if(distanceInFeet > 2000 && distanceInFeet <= 2500){
        return 25;
      }
      else(distanceInFeet > 2500);
        return 'cannot travel that far';
      
  }
