'use strict';

// /**
//  * Scoping in Practice
//  */

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       const output = 'New Output';
//     }
//     // var variables do not care about block scope
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   //   console.log(firstName)
//   printAge();
//   return age;
// }

// const firstName = 'Jiayin';
// console.log(calcAge(1992));

// /**
//  * Hoisting and TDZ in Practice
//  */

// // variables
// console.log(me);

// let job = 'programmer';
// console.log(job);

// const year = 1992;
// console.log(year);

// var me = 'Jiayin';

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Pitfall Example

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// if (!numProducts) {
//   // numProducts is undefined here
//   deleteShoppingCart();
// }

// var numProducts = 10;

// /**
//  * This keyword in practice
//  */

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge(1992);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// // when we have a method call, the this  keyword inside
// // of the method will be the object that is calling the method.
// const JY = {
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year); // this is not static
//   },
// };

// JY.calcAge();

// const matilda = {
//   year: 2017,
// };

// // Method borrowing
// matilda.calcAge = JY.calcAge;
// matilda.calcAge();

// const f = JY.calcAge;
// f(); // Cannot read property 'year' of undefined

const JY = {
  firstName: 'JY',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

// arrow function does not get its own 'this' keyword
// the parent scope of the greet() is the global scope
// the {} surrounds JY is just an object literal is not a code block
JY.greet(); // undefined
