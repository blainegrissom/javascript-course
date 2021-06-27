// Lecture: Functions
function describeCountry(country, population, capitalCity) {
    const GIVEN_COUNTRY = `${country} has ${population} people and it's capital city is ${capitalCity}.`;
    return GIVEN_COUNTRY;
}

console.log(describeCountry('United States of America','300 million','Washington D.C.'));
console.log(describeCountry('Canada','38 million','Ottawa'));
console.log(describeCountry('Japan','126 million','Tokyo'));