export const profileEditElement = document.querySelector('.profile__edit-button');
export const popupEditElement = document.querySelector('.popup_edit');
export const profileAddElement = document.querySelector('.profile__add-button');
export const popupAddElement = document.querySelector('.popup_add');
export const profileNameElement = document.querySelector('.profile__name');
export const profileAboutElement = document.querySelector('.profile__about');

export const formSubmitEditElement = document.forms.edit;
export const inputName = formSubmitEditElement.elements.name;
export const inputAbout = formSubmitEditElement.elements.about;

export const formSubmitAddElement = document.forms.add;
export const inputPlaceName = formSubmitAddElement.elements.picture;
export const inputImageUrl = formSubmitAddElement.elements.link;

export const buttonEditSubmit = popupEditElement.querySelector('.popup__button');
export const buttonAddSubmit = popupAddElement.querySelector('.popup__button');
export const cardGallery = document.querySelector('.gallery__list');
export const popupImageElement = document.querySelector('.popup_image');
export const popupImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption');
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const selectData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
