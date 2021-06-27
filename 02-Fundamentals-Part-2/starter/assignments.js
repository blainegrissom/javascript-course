// Lecture: Functions
function describeCountry(country, population, capitalCity) {
    const GIVEN_COUNTRY = `${country} has ${population} people and it's capital city is ${capitalCity}.`;
    return GIVEN_COUNTRY;
}

console.log(describeCountry('United States of America','300 million','Washington D.C.'));
console.log(describeCountry('Canada','38 million','Ottawa'));
console.log(describeCountry('Japan','126 million','Tokyo'));

// Lecture: Function Declarations vs Expressions
function percentageOfWorld1(population) {
    console.log('This is being done using a function declaration');
    return (population/7900)*100;
}
const CHINA = percentageOfWorld1(1441);
console.log(CHINA);

const USA = percentageOfWorld1(300);
console.log(USA);

const CANADA = percentageOfWorld1(38);
console.log(CANADA);

const percentageOfWorld2 = function (population) {
    console.log('This is being done using a function expresssion');
    return (population/7900)*100;
}

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(300));
console.log(percentageOfWorld2(38));