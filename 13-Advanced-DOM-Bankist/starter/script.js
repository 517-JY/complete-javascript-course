'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Nodelists is not an array but still has forEach method
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// /**
//  * Selecting, Creating and Deleting Elements
//  */

// /////////////////////////////////////////////////////
// console.log(document.documentElement); // will be the entire HTML
// console.log(document.head);
// console.log(document.body);

// console.log(allSections);

document.getElementById('section--1');
// console.log(document.getElementById('section--1'));

// Get all the buttons
// Returns HTMLCollection (a live collection)
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cokkied for improved functionality and analytics';
// message.innerHTML = `${message.textContent} <button class="btn btn--close-cookie">Got it!</button>`;

// // only one
// header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function (event) {
//     message.remove();
//   });

/**
 * Smooth Scrolling
 */

// // HACK - Recap
btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);
  console.log(event.target.getBoundingClientRect());
  console.log('current scroll(X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // s1coords.left annd s1coords.top are all relative to viewport not the page

  // Wrong scroll
  // window.scrollTo(s1coords.left, s1coords.top);
  // console.log(`s1coords.left : ${s1coords.left}`);
  // console.log(`s1coords.top : ${s1coords.top}`);

  // Correct scroll -- method1
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // console.log(
  //   `s1coords.left  + window.pageXOffset: ${s1coords.left + window.pageXOffset}`
  // );
  // console.log(
  //   `s1coords.top + window.pageYOffset: ${s1coords.top + window.pageYOffset}`
  // );

  // // Correct scroll -- method2
  // section1.scrollIntoView({ behavior: 'smooth' });
});

// needs to get the coordinates of the element that we want to scroll to

// console.log(btnScrollTo);
// console.log(section1);

/**
 * Page Navigation(Smooth)
 */

// // Cons of this below apparoach is inefficient :
// // same event handler is added to three elements
// // There could be cases where there are more than 100000 elements
// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Better Solution : event delegation -- find the common parent element
// of all the elements that we are interested in

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    event.preventDefault();

    // Matching strategy
    if (event.target.classList.contains('nav__link')) {
      // console.log(this);
      const id = event.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

//////////////////////////////////////////////////////

// /**
//  * Style  / Attributes  / Classes
//  */
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// // console.log(message.style.height); // Can't get
// // console.log(message.style.width); // Can get

// // // Get all properties
// // console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // HACK - Recap
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';
// console.log(getComputedStyle(message).height);

// // Set style
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attribute
// const log = document.querySelector('.nav__logo');
// // only show standard property
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer); // does not work
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src); // http://127.0.0.1:8080/img/logo.png
// console.log(logo.getAttribute('src')); // img/logo.png

// const link = document.querySelector('.twitter-link');
// // Below two print the same results
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // data.set.versionNumber --- standard property
// console.log(logo.dataset.versionNumber);

// // Classes
// log.classList.add('c', 'j');
// log.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.toggle('c');
// console.log(logo.classList.contains('c'));

// /**
//  * Type of events and event handler
//  */
// const h1 = document.querySelector('h1');
// console.log(h1);

// // h1.onmouseenter = function (event) {
// //   alert('addEventListner:Great! reading headline again');
// // };

// // Remove enventHandler
// // Only want to listen to the event once
// const alertH1 = function (event) {
//   alert('addEventListner:Great! reading headline');
//   //this.removeEventListener('mouseenter', alertH1);
// };

// HACK
// h1.addEventListener('mouseenter', alertH1);
// // Remove the event after 2 seconds
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 2000);

// /**
//  * Event Propagation in Practice
//  */

// // rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // in an event handler that this keyword, points always to the element
//   // on which that event handler is attached.
//   this.style.backgroundColor = randomColor();
//   // e.target is essentially where the event originated
//   //          is not the element on which the handler is actually attached
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
//   console.log(e.target === this); // true

//   // // Stop propagation
//   // e.stopPropagation();
// });

// // parent element of .nav_link
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log('LINK');
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
//   console.log(e.target === this); // false
// });

// // parent element of .nav_links
// document.querySelector('.nav').addEventListener('click', function (e) {
//   // console.log('LINK');
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
//   console.log(e.target === this); // false
// });

/**
 * Event Delegation
 */
