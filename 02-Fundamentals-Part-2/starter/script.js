"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive.");

// const interface = 'Audio';
// const private = 534;

function logger() {
  console.log("My name is Blaine");
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
};

const age2 = calcAge2(1998);

console.log(age1, age2);

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1998, `Blaine`));
console.log(yearsUntilRetirement(1980, `Bob`));

// Function Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
////////////////////////////////////////////////////
// Coding Challenge #1
/*

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores

const team1 = "Dolphins";
const team2 = "Koalas";
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const checkWinner = (avgTeam1, avgTeam2) => {
  if (avgTeam2 >= 2 * avgTeam1) {
    return `${team2} wins with a score of ${avgTeam2} to ${avgTeam1}.`;
  } else if (avgTeam1 >= 2 * avgTeam2)
    return `${team1} wins with a score of ${avgTeam1} to ${avgTeam2}.`;
  else return "Neither team wins.";
};

const avgTeam1 = calcAverage(85, 54, 41);
const avgTeam2 = calcAverage(23, 34, 27);
console.log(checkWinner(avgTeam1, avgTeam2));
*/

/*
// Lecture: Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991,1984,1970,2001);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "James"; // Replacing elements of array is allowed
console.log(friends);

// friends = ['Bob','Alice'];  // Replacing entire array is illegal

const firstName = "Blaine";
const blaine = [
  firstName,
  "Grissom",
  2021 - 1998,
  "software engineer",
  friends,
];
console.log(blaine, blaine.length);

function calcAge(birthYear) {
  return 2021 - birthYear;
}
const years = [1994, 1968, 1966, 1998, 2012];
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Lecture: Basic Array Operations (Methods)
// Add Elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(newLength, friends);

friends.unshift("John");
console.log(friends);

// Remove Elements
const popped = friends.pop(); // Last Element
console.log(popped, friends);

friends.shift(); // First Element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// includes is strict equality
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
if (friends.includes("Peter")) console.log("You have a friend called Peter");
*/

////////////////////////////////////////////////////
// Coding Challenge #2
/*

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

const calcTip = (bill) => (bill >= 50 && bill <= 300 ? 0.15 : 0.2);
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
  bills[0] + bills[0] * tips[0],
  bills[1] + bills[1] * tips[1],
  bills[2] + bills[2] * tips[2],
];
console.log(bills, tips, total);
