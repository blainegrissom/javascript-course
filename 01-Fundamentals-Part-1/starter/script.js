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
*/

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