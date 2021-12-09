'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Blaine');
}

// calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const age1 = calcAge1(1998);

// Function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1998);

console.log(age1,age2);

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021-birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1998,`Blaine`));
console.log(yearsUntilRetirement(1980,`Bob`));
*/

// Function Calling Other Functions
function cutFruitPieces (fruit) {
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));