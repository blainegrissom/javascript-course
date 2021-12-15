/*
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

// Lecture: Introduction to Arrays
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populations = [300, 38, 8, 1141];
console.log(populations.length == 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);

// Lecture: Basic Array Operations (Methods)
const neighbors = ["Canada", "Mexico"];
neighbors.push("Utopia");
neighbors.pop();
if (!neighbors.includes("Germany"))
  console.log(`Probably not a Central European country!`);
neighbors[neighbors.indexOf(`Canada`)] = `Panama`;

// Lecture: Introduction to Objects
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  population: "300",
  language: "English",
  neighbors: ["Canada", "Mexico"],
};

// Lecture: Dot vs Bracket Notation
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  population: "300",
  language: "English",
  neighbors: ["Canada", "Mexico"],
};
console.log(
  `${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbors.length} neighbors, and the capital is ${myCountry.population}.`
);
console.log(Number(myCountry.population) + 2);
console.log(Number(myCountry["population"]) - 2);
*/

// Lecture: Object Methods
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  population: "300",
  language: "English",
  neighbors: ["Canada", "Mexico"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million people, ${this.neighbors} neighbors, and the capital is ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.neighbors ? this.isIsland=false : this.isIsland=true;
    return this.isIsland;
  },
};
myCountry.describe();
console.log(myCountry.checkIsland());
