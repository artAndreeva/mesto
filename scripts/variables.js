const profileEditElement = document.querySelector('.profile__edit-button');
const popupEditElement = document.querySelector('.popup_edit');
const profileAddElement = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_add');
const popupCloseEditElement = document.querySelector('.popup__close-button_edit');
const popupCloseAddElement = document.querySelector('.popup__close-button_add');
const popupCloseImageElement = document.querySelector('.popup__close-button_image');
const profileNameElement = document.querySelector('.profile__name');
const profileAboutElement = document.querySelector('.profile__about');

const formSubmitEditElement = document.forms.edit;
const inputName = formSubmitEditElement.elements.name;
const inputAbout = formSubmitEditElement.elements.about;

const formSubmitAddElement = document.forms.add;
const inputPlaceName = formSubmitAddElement.elements.picture;
const inputImageUrl = formSubmitAddElement.elements.link;

/* const formSubmitEditElement = document.querySelector('.popup__form_edit');
const inputName = document.querySelector('.popup__field_name');
const inputAbout = document.querySelector('.popup__field_about');

const formSubmitAddElement = document.querySelector('.popup__form_add');
const inputPlaceName = document.querySelector('.popup__field_place-name');
const inputImageUrl = document.querySelector('.popup__field_image-url');

const formSaveElement = document.querySelectorAll('.popup__save-button');
 */

const cardGallery = document.querySelector('.gallery__list');
const popupImageElement = document.querySelector('.popup_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const initialCards = [
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
const initialCardsReverse = initialCards.reverse();
