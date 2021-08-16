// let js = 'amazing';
// // if (js === 'amazing') alert('JS is fun');

// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// let PI = 3.1415;


// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// console.log(myFirstJob);

// console.log('9' - '5');

// let country = 'China';
// let continent = 'Asia';
// let population = 1400;
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = false;
// let language;

// console.log(typeof (isIsland));
// console.log(typeof (population));
// console.log(typeof (country));
// console.log(typeof (language));


// language = 'Chinese';


// console.log(typeof true);

// let javascriptIsFun = true;

// console.log(typeof javascriptIsFun);

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// console.log(typeof null);

// let age = 30;
// age = 31;

// var job = 'programmer';
// job = 'teacher';

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schemedtamnn';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5;
// x += 10;
// x += 4;
// x++;
// x--;
// x--;
// console.log(x);


// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 20);


// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;


// let x, y;
// x = y = 15 - 10 - 5;
// console.log(x, y);


// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);



// const jonasNew = `I'm ${firstName}, a ${year - birthYear}  year old ${job}!`
// console.log(jonasNew)

// console.log('String with \n\
// mutiple \n\
// lines');


// console.log(`String
// with
// mutiple
// lines`);



// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Can start driving licence ');
// } else {
//     console.log(`Not old enough, needs to wait ${18 - age} years`);
// }


// let century
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     centur = 21;
// }

// console.log(century);



// /**
//  * Type Conversion
//  */

// const inputYear = '1992';
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number(inputYear), inputYear);

// console.log(Number('Jones'));
// // NaN is not a valid number
// console.log(typeof NaN);

// console.log(String(23), 23);



// /**
//  * Type Coericion
//  */

// // Number will be converted to String when meets '+' operator
// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + '23' + ' years old')
// console.log('I am ' + String(23) + ' years old')

// // String will be converted to Number when meets '-', '*' ,'/'
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + '1';
// n = n - 1;
// console.log(n); //10



// /**
//  * Truthy and Falsy Values
//  */

// // 5 falsy values in JS: 0, '',undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean(''));


// const money = 10;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job!');
// }


// let height = 0;
// if (height) {
//     console.log('Defined');
// } else {
//     console.log('Undefined'); // this one will be printed
// }



// /**
//  * Equality Operators : == vs ===
//  */

// // === Strict equality comparison
// const age = 18;
// if (age === 18) {
//     console.log('Adult!')
// }

// // == Loose equality comparison, does type coersion
// console.log('18' == 18); // true
// console.log('18' === 18); // false


// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof (favourite)); // String


// if (favourite == 517) { //'517' == 517
//     console.log('Cool! 517 is an amazing number') // will be printed 
// }

// if (favourite === 517) { // '517' === 517
//     console.log('Cool! 517 is an amazing number') // will not be printed
// } else if (favourite == 7) {
//     console.log('Cool! 7 is also an amazing number')
// } else {
//     console.log('input is not 517 or 7');
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof (favourite)); // String

// if (favourite !== 23) console.log('Is not 23');


// /**
//  * Boolean Logic -- Truth Table
//  */


// const age = 16;
// const A = age >= 20;
// const B = age < 30;

// console.log(!A);
// console.log(A && B);
// console.log(A || B);
// console.log(!A && B);
// console.log(A || !B);


// /**
//  * Logical Operators
//  */

// const hasDriversLicense = true; //A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);


// const isTired = true; // C


// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
// if (shouldDrive) {
//     console.log('Can Drive');
// } else {
//     console.log('Someone else should drive');
// }


// /**
//  * Switch Statment
//  */

// const day = 'wednesday';
// switch (day) {
//     case 'monday':  // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//     default:
//         console.log('Not a vlid day!');
// }


// /**
//  * Statements and Expressions
//  */

// Expressions giva us a value, while Statements are a series of actions



// /**
//  *  Conditional(Ternary) Operator --- if-else statement in one line
//  * */

// const age = 13;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(`${drink}`);
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


/**
 * JavaScript Releases: ES5, ES6+ and ESNext
 */

// JavaScript has almost nothing todo Java
// Backward compatible

// During development : Simply use the lastest Google Chrome!
// During production: Use Babel to transpile and polyfill your code(Converting back to ES5 to ensure browser compatibility for all users)

