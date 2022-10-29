let profileEditElement = document.querySelector('.profile__edit-button');
let popupElement = document.querySelector('.popup');
let popupCloseElement = popupElement.querySelector('.popup__close-button');
let nameElement = document.querySelector('.profile__name');
let aboutElement = document.querySelector('.profile__about');
let inputs = document.querySelectorAll('input');

/* значения полей формы */

inputs[0].value = nameElement.textContent;
inputs[1].value = aboutElement.textContent;

/* открыть попап */

function popupOpen() {
  popupElement.classList.add('popup_opened');
}

profileEditElement.addEventListener('click', popupOpen);

/* закрыть попап */

function popupClose() {
  popupElement.classList.remove('popup_opened');
  inputs[0].value = nameElement.textContent;
  inputs[1].value = aboutElement.textContent;
}

popupCloseElement.addEventListener('click', popupClose);

/* сохранить новое значение полей формы */

let formElement = document.querySelector('.popup__form');

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameElement.textContent = inputs[0].value;
  aboutElement.textContent = inputs[1].value;
  popupClose()
}

formElement.addEventListener('submit', formSubmitHandler);
