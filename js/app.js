'use strict';

let btnWrite = document.querySelector('.btn__write');

let modalWriteForm = document.querySelector('.modal__write_us');
let writeFormSubmit = modalWriteForm.querySelector('.btn__submit');
let writeFormClose = modalWriteForm.querySelector('.modal__close');

btnWrite.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWriteForm.classList.add('modal__show');
})


let infoMap = document.querySelector('.info__map');
let modalMap = document.querySelector('.modal__map');
let mapClose = modalMap.querySelector('.modal__close');

infoMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal__show');
});


mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal__show');
})
