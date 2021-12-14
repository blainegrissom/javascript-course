// Lecture: Functions
function describeCountry(country, population, capitalCity) {
  const GIVEN_COUNTRY = `${country} has ${population} people and it's capital city is ${capitalCity}.`;
  return GIVEN_COUNTRY;
}

console.log(
  describeCountry("United States of America", "300 million", "Washington D.C.")
);
console.log(describeCountry("Canada", "38 million", "Ottawa"));
console.log(describeCountry("Japan", "126 million", "Tokyo"));

// Lecture: Function Declarations vs Expressions
function percentageOfWorld1(population) {
  console.log("This is being done using a function declaration");
  return (population / 7900) * 100;
}
const CHINA = percentageOfWorld1(1441);
console.log(CHINA);

const USA = percentageOfWorld1(300);
console.log(USA);

const CANADA = percentageOfWorld1(38);
console.log(CANADA);

const percentageOfWorld2 = function (population) {
  console.log("This is being done using a function expresssion");
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(300));
console.log(percentageOfWorld2(38));

// Lecture: Arrow Function
const percentageOfWorld3 = (population) => {
  console.log("This is being done using an arrow function.");
  return (population / 7900) * 100;
};
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(300));
console.log(percentageOfWorld3(38));

// Lecture: Functions Calling Other Functions
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has a population of ${population}. This is roughly ${percentage}% of the world's population.`;
};

console.log(describePopulation("China", 1141));
console.log(describePopulation("USA", 300));
console.log(describePopulation("Canada", 38));
