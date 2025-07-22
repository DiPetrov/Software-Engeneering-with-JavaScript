function convertDistance(meters) {
  let distanceInKilometers = meters / 1000;
  let distanceInMiles = distanceInKilometers * 0.62137;

  console.log(`${meters} meters is equal to ${distanceInKilometers} kilometers.`);
  console.log(`${distanceInKilometers} kilometers is equal to ${distanceInMiles.toFixed(2)} miles.`);
  
}

convertDistance(1852);
convertDistance(798);
