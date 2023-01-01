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
} from '../utils/variables.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
/* import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js'; */


// галерея


const cardList = new Section({
  items: initialCards,
  renderer: (galleryItem) => {
    const card = new Card(galleryItem, '.card-template_type_default', createCardPopup);
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
}, cardGallery);


cardList.renderItems();

/* function renderCard(card, container) {
  container.prepend(card);
}

function createNewCard(element, selector) {
  const newCard = new Card(element, selector, createCardPopup);
  return newCard;
} */

/* function createNewUserCard() {
  const link = inputImageUrl.value;
  const name = inputPlaceName.value;
  const card = createNewCard(({ link, name }), '.card-template_type_default', createCardPopup);
  renderCard(card.createCard(), cardGallery);
} */

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

const EditFormValidation = new FormValidator(selectData, formSubmitEditElement);
EditFormValidation.enableValidation();

const AddFormValidation = new FormValidator(selectData, formSubmitAddElement);
AddFormValidation.enableValidation();

// слушатели

profileEditElement.addEventListener('click', () => {
  openPopup(popupEditElement);
  setEditPopupOpenValue();
  EditFormValidation.resetValidation();
});

formSubmitEditElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  setEditPopupSubmitValue();
  closePopup(popupEditElement);
});

profileAddElement.addEventListener('click', () => {
  openPopup(popupAddElement);
  AddFormValidation.resetValidation();
});

formSubmitAddElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  createNewUserCard()
  closePopup(popupAddElement);
  formSubmitAddElement.reset();
});
