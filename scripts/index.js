let profileEditElement = document.querySelector('.profile__edit-button');
let popupElement = document.querySelector('.popup');
let popupCloseElement = popupElement.querySelector('.popup__close-button');
let nameElement = document.querySelector('.profile__name');
let aboutElement = document.querySelector('.profile__about');
let inputs = document.querySelectorAll('input');
let formElement = document.querySelector('.popup__form');

function popupOpen() {
  popupElement.classList.add('popup_opened');
  inputs[0].value = nameElement.textContent;
  inputs[1].value = aboutElement.textContent;
}

function popupClose() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameElement.textContent = inputs[0].value;
  aboutElement.textContent = inputs[1].value;
  popupClose();
}

profileEditElement.addEventListener('click', popupOpen);
popupCloseElement.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);
