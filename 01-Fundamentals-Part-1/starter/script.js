/*
let js = 'amazing';
console.log(40+8+23+1-10);

console.log("Blaine");
console.log(22);

let firstName = "Blaine";
console.log(firstName);

let blaine_grissom = "BG";
let $function = 27;

let person = 'blaine';
let PI = 3.1415;

let myFirstJob = 'Bus boy';
let myCurrentJob = 'Programmer';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 22);
console.log(typeof 'Blaine');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2021;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1990;
// const job;

var job = 'progammer';
job = 'teacher';

lastName = 'Grissom';
console.log(lastName);

// Math Operators
const now = 2037;
const ageBlaine = now - 1998;
const ageSarah = now - 2018;
console.log(ageBlaine, ageSarah);

// 2 ** 3 means 2 to the power of 3 (or 2^3)
console.log(ageBlaine * 2, ageBlaine / 10, 2 ** 3);
const firstName = 'Blaine';
const lastName = 'Grissom';
console.log(firstName + " " + lastName);
console.log(firstName, lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

// Comparison Operators
console.log(ageBlaine > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
console.log(ageBlaine === ageSarah);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

const now = 2037;
const ageBlaine = now - 1998;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x,y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageBlaine + ageSarah) / 2;
console.log(ageBlaine, ageSarah, averageAge);
*/

//////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
Test Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Test Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/
// Test Data 1
// let markMass = 78; // 78 kg
// const markHeight = 1.69; // 1.69 m
// let johnMass = 92; // 92 kg
// const johnHeight = 1.95; // 1.95 m
/*
const markMass = 95; // 78 kg
const markHeight = 1.88; // 1.69 m
const johnMass = 85; // 92 kg
const johnHeight = 1.76; // 1.95 m

let markBMI, johnBMI;
console.log(markBMI = markMass / (markHeight**2));
console.log(johnBMI = johnMass / (johnHeight**2));
console.log(markHigherBMI = (markBMI > johnBMI));

const firstName = 'Blaine';
const job = 'Software Engineer';
const birthYear = 1998;
const year = 2037;

const blaine = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(blaine);

const blaineNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(blaineNew);

console.log(`Just a regular string, written with backticks \`\``);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
with multiple
lines.`);

const age = 15;

if (age >= 16) {
    console.log(`Sarah can start her driving license.`);
} else {
    const yearsLeft = 16-age;
    console.log(`Sarah cannot start her driving license. Wait another ${yearsLeft} more years.`);
}
let century
const birthYear = 1998; 
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

////////////////////////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK 
*/

const markMass = 100; // 78 kg
const markHeight = 1.88; // 1.69 m
const johnMass = 85; // 92 kg
const johnHeight = 1.76; // 1.95 m

let markBMI, johnBMI;
console.log(markBMI = markMass / (markHeight**2));
console.log(johnBMI = johnMass / (johnHeight**2));

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}) by ${markBMI-johnBMI}!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}) by ${johnBMI-markBMI}!`)
}