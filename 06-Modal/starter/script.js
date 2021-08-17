'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// // only the first one will be selected
// const btnsShowModal = document.querySelector('.show-modal');
// console.log(btnsShowModal);

console.log(btnsShowModal);

// Separate openModal and closeModal as functions
const openModal = function () {
  // besides remove classes we can also add and check classes
  modal.classList.remove('hidden'); // dot is not used here
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  //   console.log(btnsShowModal[i].textContent);
  btnsShowModal[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Both click the close button and the outside range will make the modal close
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/**
 * Keyboard(global) events
 */
// Listens events that happen everywhere
// Keyboard events three types:
// 1. keydown : as soon as we just press down the key
// 2. keyup : only happens when we lift or finger off the keyboard
// 3. keypress : when we continously keep our finger on a certain key
document.addEventListener('keydown', function (event) {
  //the event object will contain all the information of the specific event

  console.log(event.key, typeof event.key);
  if (event.key === 'Escape') {
    // only want to close the modal when the modal is visiable
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
