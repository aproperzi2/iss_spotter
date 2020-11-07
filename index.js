// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip)
// })

// fetchCoordsByIP('172.103.186.183', (error, coords) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log(`It worked! Returned Coords:`, coords);
// })


// // left off here
// fetchISSFlyOverTimes({ latitude: 51.0207, longitude: -114.1011 }, (error, passTimes) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// })



const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(`It didn't work!`, error);
  }

  printPassTimes(passTimes);
})
