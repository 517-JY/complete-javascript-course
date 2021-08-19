'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// the sort parameter indicates whether the movements should be sorted or not
const displayMovements = function (movements, sort = false) {
  // innerHTML is simliar to textContent
  // console.log(containerMovements.innerHTML);
  containerMovements.innerHTML = '';

  //
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((movement, i) => {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    // 1. define the html template literal
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${movement}</div>
    </div>
  `;

    // 2. add this html onto the web page
    //    use a method called insertAdjacentHTML, 'afterbegin' here indicates where the new movement should be put
    containerMovements.insertAdjacentHTML('afterbegin', html);
    //console.log(containerMovements.innerHTML);
  });
};

// displayMovements(account1.movements);

/**
 * Create a function that generate users initials
 * @param {*} accounts all the user accounts
 */
const createUsernames = function (accounts) {
  accounts.forEach(account => {
    // create a new property on the account element
    // split method returns an array
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);

/**
 * Creates calcDisplayBalance method for specific account
 * @param {} movements
 */
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  account.balance = balance; // adds a new property to account
  // console.log(balance);
  labelBalance.textContent = `${balance} EUR`;
};
// calcDisplayBalance(account1.movements);

/**
 * Creates calcDisplaySummary method for displaying income/out/interest
 * @param {*} account
 */
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const updateUI = function (currAccount) {
  // Display movements
  displayMovements(currAccount.movements);

  // Display balance
  calcDisplayBalance(currAccount);

  // Display summary
  calcDisplaySummary(currAccount);
};

/**
 * User login
 */
let currentAccount = undefined;
btnLogin.addEventListener('click', function (event) {
  // The button is a form element -- keeps reload the page
  // prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // console.log(typeof currentAccount.pin); // number

  // // Needs to check the currentAccount is exist
  // if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
  //   console.log('LOGIN');
  // }

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI the welcome message
    labelWelcome.textContent = `Welcome back! ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur(); // make it lose it focus

    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
  }
});

/**
 * Sort Movements
 */
let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/**
 * Loan Request
 */
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // updateUI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

/**
 * Money Transfer
 */
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );
  console.log(amount, receiveAcc);

  // clear the input
  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiveAcc &&
    receiveAcc.username !== currentAccount.username
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
});

/**
 * Close Account
 */
btnClose.addEventListener('click', function (event) {
  event.preventDefault();

  // Check credentials
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      account => account.username === currentAccount.username
    );
    console.log(index);

    // find exact index and remove exact 1 element -- Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

/** ---------------------Array Methods------------------- */

// /**
//  * forEach with Map and Sets
//  */
// currencies.forEach((value, key, map) => {
//   console.log(`${key} : ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'CNY', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach((value, key, set) => {
//   // Key is exact same as value
//   console.log(`${key} : ${value}`);
// });

// /**
//  * Looping Arrays:forEach (cannot use  break and continue)
//  */

// for (const movement of movements) {
//   let str =
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdrew ${Math.abs(movement)}`;
//   console.log(str);
// }

// console.log('--------------');

// movements.forEach(movement => {
//   let str =
//     movement > 0
//       ? `You deposited ${movement}`
//       : `You withdrew ${Math.abs(movement)}`;
//   console.log(str);
// });

// console.log('--------------');
// movements.forEach((movement, i, arr) => {
//   let str =
//     movement > 0
//       ? `Movement ${i} : You deposited ${movement}`
//       : `Movement ${i} : You withdrew ${Math.abs(movement)}`;
//   console.log(str);
//   // console.log(arr);
// });

/**
 * Array Methods
 */

// slice method does not change the original array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr);

// // get the last few elements
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// // get the array starts from 1 and excepts the last two elements
// console.log(arr.slice(1, -2));
// creates a shallow array
// console.log(arr.slice());

// // SPLICE method -- will mutuate the original array
// console.log(arr.splice(2));
// console.log(arr);
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);
// console.log(arr.splice(-1));
// console.log(arr);
// // starts from position 1 and delete 2 elements
// console.log(arr.splice(1, 2));
// console.log(arr);

// // REVERSE method
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// // console.log(arr2);
// // console.log(arr2.reverse());
// // console.log(arr2);

// // // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(arr);

// // JOIN
// console.log(letters.join(' - '));

// /**
//  * Code Challenge -- check dogs
//  */

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   // delete the first data
//   dogsJuliaCorrected.splice(0, 1);
//   // delete the last two data
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   // For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
//   dogs.forEach((dog, i) => {
//     let dogStr =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(dogStr);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// /**
//  * The Map method :
//  * map is actually similar to the forEach method that we studied before
//  * but with the difference that map creates a brand new array ased on the original array.
//  * map returns a new array containing the results of applying an operation on all original array elements
//  *
//  */

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(movement => {
//   return movement * eurToUsd;
// });

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((movement, i) => {
//   return `Movement ${i + 1} :
//   You ${movement > 0 ? 'deposited' : 'withdrew'} ${Math.abs(movement)}`;
// });

// console.log(movementsDescriptions);

// /**
//  * The Filter Method :
//  * filter returns a new array containing the array elements that passed a
//  * specified test condition
//  */
// const deposits = movements.filter(movement => {
//   return movement > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositsFor.push(mov);
//   }
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(movement => {
//   return movement < 0;
// });
// console.log(movements);
// console.log(withdrawals);

// /**
//  * The Reduce Method:
//  * reduce all array elements down to one single value
//  */

// console.log(movements);
// // reduce to a single value
// const balance = movements.reduce(function (accumulate, cur, i, arr) {
//   // console.log(`Iteration ${i + 1} : ${cur}  ${accumulate}`);
//   return accumulate + cur;
// }, 0); // the second parameter is the initial value for accumulate
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// const maxMov = movements.reduce((acc, mov) => {
//   return acc > mov ? acc : mov;
// }, movements[0]);

// console.log(maxMov);

// /**
//  * Code Challenge
//  */

// const calcAverageHumanAge = function (dogAges) {
//   const humanAges = dogAges.map(dogAge => {
//     return dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4;
//   });
//   console.log(dogAges);
//   console.log(humanAges);

//   const adults = humanAges.filter(humanAge => {
//     return humanAge >= 18;
//   });
//   console.log(adults);

//   const average =
//     adults.reduce((acc, curr) => {
//       return acc + curr;
//     }, 0) / adults.length;
//   // console.log(average);

//   return average;
// };

// console.log(
//   calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]),
//   calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// );

// // PIPELINE
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// /**
//  * Code Challenge
//  */

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// /**
//  * Find Method
//  */
// // only returns the first element in the array that statisfies the condition
// const firstWithdrawal = movements.find(move => move < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

/**
 * findIndex Method
 */

// /**
//  * Some and every Method
//  */
// // Equality
// console.log(movements);
// console.log(movements.includes(-130));

// // Condition
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // Every: Condition
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// /**
//  * flat and flatMap Method
//  */

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// // Flat method only goes one level deep when flating an array
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   .map(account => account.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// // flatMap -- combine map and flat method (only goes one level deep)
// const overalBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance3);

// /**
//  * Sort Method
//  */

// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners);
// // Mutate the original array
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// // return < 0, then A, B (keep order)
// // return > 0, then B, A (switch order)

// // Asscending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

// // Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

// /**
//  * More ways of creating and filling Array
//  * */
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Create an empty Array with 7 slots
// const x = new Array(7);
// console.log(x);
// console.log(x.length);

// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// console.log(arr);
// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from -- generate array-like structure to actual array
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (curr, i) => i + 1);
// console.log(z);

// const z2 = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z2);

// // Generate movements Array from UI
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );

//   console.log(movementsUI);
// });
