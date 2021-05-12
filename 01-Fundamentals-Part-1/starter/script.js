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

// type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Blaine'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; // 11
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Blaine'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`Don't spend it all ;)`);
} else {
    console.log(`You should get a job!`);
}

let height;
if(height) {
    console.log(`Yay, height is defined.`);
} else {
    console.log(`Height is UNDEFINED.`);
}

const age = '18';
if (age === 18) console.log(`You just became an adult (strict)`);
if (age == 18) console.log(`You just became an adult (loose)`);

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' == 23
    console.log('23 is how old I am.');
} else if (favorite === 7) {
    console.log(`7 is a number`);
} else {
    console.log(`Number is not 23 or 7`);
}

if (favorite !== 23) console.log('Why not 23');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive.`);
// } else {
//     console.log(`Someone else should drive.`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive.`);
} else {
    console.log(`Someone else should drive.`);
}
*/

////////////////////////////////////////////////////
// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks ??
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolphAvg = (96 + 108 + 89) / 3;
let koalaAvg = (88 + 91 + 110) / 3;

if (dolphAvg > koalaAvg) {
    console.log(`Dolphins win ${dolphAvg} to ${koalaAvg}!`);
} else if (koalaAvg > dolphAvg) {
    console.log(`Koalas win ${koalaAvg} to ${dolphAvg}!`);
} else {
    console.log(`It's a draw ${koalaAvg} to ${dolphAvg}!`);
}

// Bonus 1 
minScore = 100;
if (dolphAvg > koalaAvg) {
    if (dolphAvg > minScore) {
        console.log(`Dolphins win ${dolphAvg} to ${koalaAvg}!`);
    } else {
        console.log(`Dolphins beat the Koalas, but didn't score higher than ${minScore}`);
    }
} else if (koalaAvg > dolphAvg) {
    if (koalaAvg > minScore) {
        console.log(`Koalas win ${koalaAvg} to ${dolphAvg}!`);
    } else {
        console.log(`Koalas beat the Dolphins, but didn't score higher than ${minScore}`);
    }
} else {
    if (koalaAvg > minScore && dolphAvg > minScore) {
        console.log(`It's a draw ${koalaAvg} to ${dolphAvg}, and both scored higher than ${minScore}!`);
    } else {
        console.log(`It's a draw ${koalaAvg} to ${dolphAvg}, but neither scored higher than ${minScore}!`);
    }   
}

const day = 'friday';

switch(day) {
    case 'monday': // day === 'monday', strict comparison
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a valid day.`);
}

if (day === 'monday') { 
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`Not a valid day.`);
}
*/

const age = 23;
age >= 18 ? console.log('I like to drink wine ') : console.log(`I like to drink water`);

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

