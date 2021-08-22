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

const h1 = document.querySelector('h1');

const nav = document.querySelector('.nav');

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

// HACK - Recap
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

/**
 * Building Tabbed Component
 */
// HACK - Recap
const tabs = document.querySelectorAll('.operations__tab');
// console.log(tabs);
const tabsContainer = document.querySelector('.operations__tab-container');
// console.log(tabsContainer);
const tabsContent = document.querySelectorAll('.operations__content');
// console.log(tabsContent);

// // Not desirable, needs event delegation here
// tabs.forEach(t =>
//   t.addEventListener('click', function (event) {
//     console.log('TAB');
//   })
// );

tabsContainer.addEventListener('click', function (event) {
  // Needs to get the tab no matter click span or button
  const clicked = event.target.closest('.operations__tab');
  // console.log(clicked);

  // if the user click inside the container but not any tabs
  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Active content area
  tabsContent.forEach(operContent =>
    operContent.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/**
 * Menu fade animation
 */
// Events bubble up from the target

const handleHover = function (event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(element => {
      if (element !== link) {
        element.style.opacity = opacity;
      }
      logo.style.opacity = opacity;
    });
  }
};

// HACK - Recap
// // Below is Wrong (because eventlistner expects a function, not a value)
// nav.addEventListener('mouseover', handleHover(event, 0.5));
// // 'mouseout' is opposite of 'mouseover'
// nav.addEventListener('mouseout', handleHover(event, 1));

// Correct Way
nav.addEventListener('mouseover', function (event) {
  handleHover(event, 0.5);
});
// 'mouseout' is opposite of 'mouseover'
nav.addEventListener('mouseout', function (event) {
  handleHover(event, 1);
});

// /**
//  * Sticky Navigation
//  */
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);
// window.addEventListener('scroll', function (event) {
//   // console.log(window.scrollY);
//   // add sticky class once reaches section--1
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// HACK - Recap
/**
 * Sticky Navigation -- Using Intersection Observer API
 */
// // entries here are an array of the threshold entries
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   // The root element will be the element
//   // that we want our target element to intersect
//   root: null,
//   // threshold is the percentage of intersection
//   // at which the observer callback will be called
//   // In this particular example
//   // whenever section1 is interscting the viewport(root) at 10% (threashold)
//   // the obsCallback function will get called
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  // when the header is not intersecting with the viewport
  // we'd like to add the sticky class

  // when the target is not intersecting the root
  // want the sticky class applied
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // when 0% of the header here is visible
  threshold: 0,
  // now the navigation appeared exactly 90 pixels
  // before the threshold was actually reached.
  rootMargin: `${navHeight}px`,
});

headerObserver.observe(header);

/**
 * Reveal Sections as Approaching
 */

// The logical
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  // entry.target is which entry is actually intersected with the viewport
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  // Only revealed when it is 15% visible
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/**
 * Lazy Loading Images
 */

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log('Before img entry print');
  console.log(entry);
  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    // Only remove the 'lazy-img' class after loading
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // Complete the lazy loading before actually intersects
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

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

// HACK - Recap
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

// /**
//  * DOM Traverse
//  */

// // console.log(h1);
// // Going downwards : child
// console.log(h1.querySelectorAll('.highlight'));
// // Get Nodelist
// // console.log(h1.childNodes);
// // Only get HTMLCollection, only work for direct children
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// // Going upwards:parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// Choose closest element that has the header class
// h1.closest('.header').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// // Get all the siblings
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.8)';
//   }
// });
