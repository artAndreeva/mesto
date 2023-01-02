import {
  profileEditElement,
  profileAddElement,
  nameElementSelector,
  aboutElementSelector,
  editForm,
  addForm,
  inputName,
  inputAbout,
  inputPicture,
  inputLink,
  cardGallerySelector,
  initialCards,
  imagePopupSelector,
  addPopupSelector,
  editPopupSelector,
  validationData
} from '../utils/variables.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// карточки

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.card-template_type_default',
      (link, name) => {
        const popupWithImage = new PopupWithImage(imagePopupSelector);
        popupWithImage.open(link, name);
        popupWithImage.setEventListeners();
      });
    const cardElement = card.createCard();
    cardList.addItem(cardElement);
  }
}, cardGallerySelector);

cardList.renderItems();





/* function renderCard(card, container) {
  container.prepend(card);
}

function createNewCard(element, selector) {
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

// формы

function setEditPopupOpenValue() {
  inputName.value = profileNameElement.textContent;
  inputAbout.value = profileAboutElement.textContent;
}

function setEditPopupSubmitValue() {
  profileNameElement.textContent = inputName.value;
  profileAboutElement.textContent = inputAbout.value;
}

// слушатели

formSubmitEditElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  setEditPopupSubmitValue();
  closePopup(popupEditElement);
});


formSubmitAddElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  createNewUserCard()
  closePopup(popupAddElement);
  formSubmitAddElement.reset();
});
*/

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

const addPopup = new PopupWithForm(addPopupSelector,
  (formData) => {

  }
);
addPopup.setEventListeners();

const editPopup = new PopupWithForm(editPopupSelector,
  (formData) => {
    userInfo.setUserInfo(formData);
  }
);
editPopup.setEventListeners();

// кнопки

profileAddElement.addEventListener('click', () => {
  addFormValidation.resetValidation();
  addPopup.open();
});

profileEditElement.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputAbout.value = info.about;
  editFormValidation.resetValidation();
  editPopup.open();
});
