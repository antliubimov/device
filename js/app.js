'use strict';

let btnWrite = document.querySelector('.btn__write');
let modalWriteForm = document.querySelector('.modal__write_us');

let infoMap = document.querySelector('.info__map');
let modalMap = document.querySelector('.modal__map');

let popupActive = (evt) => {
  evt.preventDefault();
  let popup = (evt.target === btnWrite) ? modalWriteForm : modalMap;
  let popupCloseBtn = popup.querySelector('.modal__close');
  popup.classList.add('modal__show');
  popupCloseBtn.addEventListener('click', popupCloseClick);
  document.addEventListener('keydown', escPressDown);
};

let popupClose = () => {
  let popup = document.querySelector('.modal__show');
  let popupCloseBtn = popup.querySelector('.modal__close');
  popup.classList.remove('modal__show');
  popupCloseBtn.removeEventListener('click', popupCloseClick);
  document.removeEventListener('keydown', escPressDown);
};

let popupCloseClick = (evt) => {
  evt.preventDefault();
  popupClose();
}

let escPressDown = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    popupClose();
  }
};

btnWrite.addEventListener('click', popupActive);
infoMap.addEventListener('click', popupActive);
