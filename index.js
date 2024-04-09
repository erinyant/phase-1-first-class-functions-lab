

const returnFirstTwoDrivers = (drivers) => {
    const [firstDriver, secondDriver] = drivers;
    return [firstDriver, secondDriver];
  };
  
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);


  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


  function createFareMultiplier(multiplier) {
    // function takes in multiplier are argument
    return function(fare) {
        // takes fare as only argument and returns fare * multiplier
    return fare * multiplier;
    };
    }

    const fareDoubler = createFareMultiplier(2);
    // new function with multiplier of 2
    const fare = 10;
    const doubledFare = fareDoubler(fare);
    // assign new function with const, then invoke doubler with fare value
    console.log(doubledFare);


function createFareMultiplier(multiplier) {
    // same as above
  return function(fare) {
    return fare * multiplier;
  };
}

const fareTripler = createFareMultiplier(3);
// same as above, just using tripler
const originalFare = 10;
// can't reuse fare, as used in double example
const tripledFare = fareTripler(fare);

console.log(tripledFare);


function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  }
  
  function getFirstTwoDrivers(drivers) {
    // already used return, need to sub get
    return drivers.slice(0, 2);
    // remember how these are counted - start at 0!
  }
  
  function getLastTwoDrivers(drivers) {
    // already used return, need to sub get
    return drivers.slice(-2);
  }
  
  const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers));
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers));