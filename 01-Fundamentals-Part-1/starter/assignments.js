// Lecture: Values and Variables
let country = "USA";
let continent = 'North America';
let population = 300000000;

// Lecture: Data Types
const isIsland = false;
let language;

console.log("Variable 'isIsland' is type: " + typeof isIsland);
console.log("Variable 'country' is type: " + typeof country);
console.log("Variable 'language' is type: " + typeof language);
console.log("Variable 'population' is type: " + typeof population);

// Lecture: let, const, and var
language = "English";
//isIsland = true;

// Lecture: Basic Operators
let halfPopulation = (population/2);
console.log(population++);

const finlandPopulation = 6000000;
console.log(population>finlandPopulation);

const avgCountryPop = 33000000;
console.log(population>avgCountryPop);

const portugalCountry = "Portugal";
const portugalCont = "Europe";
const portugalPop = 11000000;
const portugalLang = "Portugeuse"

// let description =  portugalCountry + "is in " + portugalCont + ", and its " + portugalPop + " people speak " + portugalLang;

// Lecture: Strings and Template Literals
const description = `${portugalCountry} is in ${portugalCont} and its ${portugalPop} people speak ${portugalLang}`;

// Lecture: Taking Decsisions: if / else Statements
if (portugalPop > avgCountryPop) {
    console.log(`Portugal's population is above ${portugalPop-avgCountryPop} average`);
} else {
    console.log(`Portugal's population is ${avgCountryPop-portugalPop} below average`);
}

// Lecture: Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 23
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 115