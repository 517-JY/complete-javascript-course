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
