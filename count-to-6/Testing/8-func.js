module.exports = function midpoint(lowerBound=0, upperBound=1) {
    console.log(`Midpoint of ${lowerBound} and ${upperBound} is ${(lowerBound+upperBound)/2}`);
    return (lowerBound+upperBound)/2;
}