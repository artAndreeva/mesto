import {
  profileEditElement,
  popupEditElement,
  profileAddElement,
  popupAddElement,
  profileNameElement,
  profileAboutElement,
  formSubmitEditElement,
  inputName,
  inputAbout,
  formSubmitAddElement,
  inputPlaceName,
  inputImageUrl,
  buttonEditSubmit,
  buttonAddSubmit,
  cardGallery,
  initialCards,
  popupImage,
  popupCaption,
  popupImageElement,
  selectData
} from './variables.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// галерея

function renderCard(card, container) {
  container.prepend(card);
}

function createNewCard(element, selector, createCardPopup) {
  const newCard = new Card(element, selector, createCardPopup);
  return newCard;
}

function getInitialCards() {
  const initialCardsReverse = initialCards.reverse();
  initialCardsReverse.forEach((element) => {
    const card = createNewCard(element, '.card-template_type_default', createCardPopup);
    renderCard(card.createCard(), cardGallery);
  });
}

getInitialCards()

function createNewUserCard() {
  const link = inputImageUrl.value;
  const name = inputPlaceName.value;
  const card = createNewCard(({ link, name }), '.card-template_type_default', createCardPopup);
  renderCard(card.createCard(), cardGallery);
}

// попапы

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
}

function closePopupByClick(evt) {
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.target.closest('.popup'));
  } else if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('click', closePopupByClick)
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  document.addEventListener('click', closePopupByClick)
}

function createCardPopup(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImageElement);
}

// формы

function undefineForm(evt) {
  evt.preventDefault();
}

function setEditPopupOpenValue() {
  inputName.value = profileNameElement.textContent;
  inputAbout.value = profileAboutElement.textContent;
}

function setEditPopupSubmitValue() {
  profileNameElement.textContent = inputName.value;
  profileAboutElement.textContent = inputAbout.value;
}

function createValidation(selectData, formElement) {
  const formValidation = new FormValidator(selectData, formElement);
  formValidation.enableValidation();
}

createValidation(selectData, formSubmitEditElement)
createValidation(selectData, formSubmitAddElement)


function removeError(popup) {
  const inputList = popup.querySelectorAll('.popup__input');
  const inputError = popup.querySelectorAll('.popup__error');
  inputList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
  inputError.forEach((inputError) => {
    inputError.textContent = '';
  });
}

function disableButton(buttonElement, selectData) {
  buttonElement.classList.add(selectData.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

// слушатели

profileEditElement.addEventListener('click', () => {
  openPopup(popupEditElement);
  setEditPopupOpenValue();
  removeError(popupEditElement);
  disableButton(buttonEditSubmit, selectData);
});

formSubmitEditElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  setEditPopupSubmitValue();
  closePopup(popupEditElement);
});

profileAddElement.addEventListener('click', () => {
  openPopup(popupAddElement);
  removeError(popupAddElement);
  disableButton(buttonAddSubmit, selectData);
});

formSubmitAddElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  createNewUserCard()
  closePopup(popupAddElement);
  formSubmitAddElement.reset();
});
