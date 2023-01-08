import './index.css';

import {
  profileEditElement,
  profileAddElement,
  nameElementSelector,
  aboutElementSelector,
  editForm,
  addForm,
  inputName,
  inputAbout,
  cardGallerySelector,
  initialCards,
  imagePopupSelector,
  addPopupSelector,
  editPopupSelector,
  validationData,
  templateSelector
} from '../utils/variables.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// карточки

const initialCardsReverse = initialCards.reverse();

function handleCardClick(link, name) {
  imagePopup.open(link, name);
}

function createNewCard(element) {
  const newCard = new Card(element, templateSelector, handleCardClick);
  const cardElement = newCard.createCard();
  return cardElement;
}

const cardList = new Section({
  items: initialCardsReverse,
  renderer: (element) => {
    const initialCards = createNewCard(element)
    cardList.addItem(initialCards);
  }
}, cardGallerySelector);

cardList.renderItems();

// валидация

const editFormValidation = new FormValidator(validationData, editForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationData, addForm);
addFormValidation.enableValidation();

// информация

const userInfo = new UserInfo({
  nameSelector: nameElementSelector,
  aboutSelector: aboutElementSelector
});

// попапы

const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

const popupAddCard = new PopupWithForm(addPopupSelector,
  (formData) => {
    const userCard = createNewCard(formData)
    cardList.addItem(userCard);
    popupAddCard.close();
  }
);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(editPopupSelector,
  (formData) => {
    userInfo.setUserInfo(formData);
    popupEditProfile.close();
  }
);
popupEditProfile.setEventListeners();

// кнопки

profileAddElement.addEventListener('click', () => {
  addFormValidation.resetValidation();
  popupAddCard.open();
});

profileEditElement.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  inputName.value = info.username;
  inputAbout.value = info.about;
  editFormValidation.resetValidation();
  popupEditProfile.open();
});
