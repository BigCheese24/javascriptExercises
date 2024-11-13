const leapYears = function(years) {
let isYearDivisibleByFour = years % 4 === 0;
let isCentury = years % 100 === 0;
let isYearDivisibleByFourHundred = years % 400 === 0;

if(isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
    return true;
} else {
    return false;
}

};

// Do not edit below this line
module.exports = leapYears;
