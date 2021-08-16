// /**
//  * Acitivating Strict Mode
//  */
// // applys at the every beginning of each script -- to make more secure code
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;


// if (passTest) {
//     hasDriversLicense = true;
// }

// if (hasDriversLicense) console.log('I can drive');

// // const interface = 'Audio';
// // const if = 23;




// /**
//  * Function Declarations vs. Expressions
//  */

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1992);
// console.log(age1);


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1992);

// console.log(age1, age2);


// /**
//  * Arrow Functions
//  */

// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1992));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }
// console.log(yearsUntilRetirement(1992, 'JY'));



// /**
//  * Functions calling other functions
//  */

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));



// /**
//  * Reviewing functions
//  */

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
//     // return ;
// }

// console.log(yearsUntilRetirement(1991, 'JY'));
// console.log(yearsUntilRetirement(1920, 'Jay'));


// /**
//  * Code Challenge
//  */

// const calcAverage = (a, b, c) => {
//     return (a + b + c) / 3;
// }

// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log('No team wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(517, 215);


// /**
//  * Introduction to Arrays
//  */

// const friend1 = 'Mike';
// const friend2 = 'Steve';
// const friend3 = 'Peter';

// const friends = ['Mike', 'Steve', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const JY = ['Jiayin', 'Li', 2021 - 1992, 'programmer', friends];
// console.log(JY);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// // years -10 --- Ilegal
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);



// /**
//  * Basic Array Operations(Methods)
//  */

// const friends = ['Mike', 'Steven', 'Peter'];
// console.log(friends);

// // appends elements at the end 
// friends.push('JY');
// console.log(friends.push('Iris')); // returns the length of the new array
// console.log(friends);

// // adds elements at front
// friends.unshift('Alice');
// console.log(friends);

// // removes elements -- reverse method of push
// friends.pop();
// console.log(friends);
// console.log(friends.pop());

// // remove elements -- reverse method of unshift()
// friends.shift();
// console.log(friends);

// friends.push(23);
// console.log(friends.indexOf('Mike'));
// console.log(friends.indexOf('Bob'));

// console.log(friends.includes('Peter'));
// console.log(friends.includes('Bob'));

// console.log(friends.includes('23'));
// console.log(friends.includes(23));

// if (friends.includes('Peter')) {
//     console.log('has Peter');
// }


// /**
//  * Code Challenge
//  */

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [1245, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1],
// bills[2] + tips[2]];
// console.log(totals);


// /**
//  * Introduction to Objects
//  */

// const JYArray = [
//     'Jiayin',
//     'Li',
//     2021 - 1992,
//     'programmer'
// ];

// const JY = {
//     firstName: 'Jiayin',
//     lastName: 'Li',
//     age: 2021 - 1992,
//     job: 'programmer',
//     friends: ['Mike', 'Peter', 'Bob']
// }

// console.log(JY);


// /**
//  * Dot vsx Bracket Notation -- retrive data from object
//  */

// const JY = {
//     firstName: 'Jiayin',
//     lastName: 'Li',
//     age: 2021 - 1992,
//     job: 'programmer',
//     friends: ['Mike', 'Peter', 'Bob']
// }

// console.log(JY);
// console.log(JY.lastName);
// console.log(JY['lastName']);

// const nameKey = 'Name';
// console.log(JY['first' + nameKey]);
// console.log(JY['last' + nameKey]);

// const interestdIn = prompt('What do you what to know about JY?');
// console.log(JY.interestdIn);  // undefined
// console.log(JY[interestdIn]); // Jiayin

// if (JY[interestdIn]) {
//     console.log(JY[interestdIn]);
// } else {
//     console.log('Wrong request');
// }

// // adds more properties to an Object
// JY.location = 'Boston';
// JY['github'] = '517-JY';
// console.log(JY);

// console.log(`${JY.firstName} has ${JY.friends.length}, and her 
// bset friend is called ${JY.friends[0]}`);


// /**
//  * Object Methods
//  */


// const JY = {
//     firstName: 'Jiayin',
//     lastName: 'Li',
//     birthYear: 1992,
//     job: 'programmer',
//     friends: ['Mike', 'Peter', 'Bob'],
//     hasDriversLicense: false,

//     calcAge: function (birthYear) {
//         return 2021 - birthYear;
//     },

//     calcAge2: function () {
//         // console.log('Print this:')
//         // console.log(this);
//         return 2021 - this.birthYear;
//     },

//     calcAge3: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge2()} - year old 
//          ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }
// }

// console.log(JY);

// console.log(JY.calcAge(1992));
// console.log(JY['calcAge'](1992));

// console.log(JY.calcAge2);
// console.log(JY.calcAge2());
// console.log(JY['calcAge2']);
// console.log(JY['calcAge2']());
// // More efficient solution
// console.log(JY.calcAge3());
// console.log(JY['calcAge3']());

// console.log(JY.getSummary());


// /**
//  * Code Challenge
//  */


// const mark = {
//     fullName: 'Mark Miler',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'john Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// console.log(mark.bmi);
// john.calcBMI();
// console.log(john.bmi);

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher
//     than ${john.fullName}'s BMI (${john.bmi}).`);
// } else if (mark.bmi < john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is lower
//     than ${john.fullName}'s BMI (${john.bmi}).`);
// }



// /**
//  * Iteration
//  */

// console.log('Lifting weights repetion 1');

// // for loop keeps running while condition is TRUE
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetion ${i}`);
// }


// /**
//  * Loops Arrays, Break, Continue
//  */

// const JY = [
//     'JY',
//     'Li',
//     2021 - 1992,
//     'programmer',
//     ['Mike', 'Peter', 'Bob'],
//     true
// ]

// const types = [];

// for (let i = 0; i < JY.length; i++) {
//     // Reading from  JY array
//     console.log(JY[i], typeof (JY[i]));
//     // Filling types array
//     //types[i] = typeof JY[i];
//     types.push(typeof JY[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log(`Current iteration of the loop is exited and 
// then the next one starts immediately`);
// for (let i = 0; i < JY.length; i++) {
//     if (typeof JY[i] !== 'string') continue;
//     // Reading from  JY array
//     console.log(JY[i], typeof (JY[i]));
//     // Filling types array
//     //types[i] = typeof JY[i];
// }

// console.log(`Completely terminates the whole loop`);
// for (let i = 0; i < JY.length; i++) {
//     console.log(JY[i], typeof (JY[i]));
//     if (typeof JY[i] === 'number') break;
// }



// /**
//  * Looping Backwards and Loops in Loops
//  */

// const JY = [
//     'JY',
//     'Li',
//     2021 - 1992,
//     'programmer',
//     ['Mike', 'Peter', 'Bob'],
//     true
// ]

// for (let i = JY.length - 1; i >= 0; i--) {
//     console.log(i, JY[i], typeof JY[i]);
// }

// for (let i = 1; i < 4; i++) {
//     console.log(`------- Starting exercise ${i}`);
//     for (let j = 1; j < 6; j++) {
//         console.log(`Lifting weight repetition ${j}`);
//     }
// }


// /**
//  * The while loop
//  */
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     roll();
//     if (dice === 6) {
//         console.log('Loop is about to end...');
//     }
// }


// function roll() {
//     dice = Math.floor(Math.random() * 6) + 1;
// }


/**
 * Code Challenge
 */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);

}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // console.log(sum / arr.length);
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));

