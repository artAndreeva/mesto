const profileEditElement = document.querySelector('.profile__edit-button');
const popupEditElement = document.querySelector('.popup_edit');
const profileAddElement = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup_add');
const closeElement = document.querySelectorAll('.popup__close-button');
const formSubmitElement = document.querySelectorAll('.popup__form');
const formSaveElement = document.querySelectorAll('.popup__save-button');
const popupImageElement = document.querySelector('.popup_image');
const nameElement = document.querySelector('.profile__name');
const aboutElement = document.querySelector('.profile__about');
const inputs = document.querySelectorAll('input');
const cardGallery = document.querySelector('.gallery__list');
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

initialCardsReverse.forEach(function (element) {
  newCard(element.link, element.name);
});

function popupOpen(popupElement) {
  popupElement.classList.add('popup_opened');
}

function popupClose(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function newCard(image, text) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardText = cardElement.querySelector('.card__text');
  const cardButton = cardElement.querySelector('.card__button');
  const cardDelete = cardElement.querySelector('.card__delete');

  cardImage.src = image;
  cardImage.alt = text;
  cardText.textContent = text;

  cardImage.addEventListener('click', () => {
    popupOpen(popupImageElement);
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupCaption.textContent = cardText.textContent;
  });
  cardButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__button_active');
  });
  cardDelete.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  cardGallery.prepend(cardElement);
}

profileEditElement.addEventListener('click', () => {
  popupOpen(popupEditElement);
  inputs[0].value = nameElement.textContent;
  inputs[1].value = aboutElement.textContent;
});

profileAddElement.addEventListener('click', () => {
  popupOpen(popupAddElement);
});

closeElement[0].addEventListener('click', () => {
  popupClose(popupEditElement);
});
closeElement[1].addEventListener('click', () => {
  popupClose(popupAddElement);
});
closeElement[2].addEventListener('click', () => {
  popupClose(popupImageElement);
});

formSubmitElement[0].addEventListener('submit', (evt) => {
  evt.preventDefault();
  nameElement.textContent = inputs[0].value;
  aboutElement.textContent = inputs[1].value;
  popupClose(popupEditElement);
});

formSubmitElement[1].addEventListener('submit', (evt) => {
  evt.preventDefault();
  newCard(inputs[3].value, inputs[2].value);
  inputs[2].value = '';
  inputs[3].value = '';
  popupClose(popupAddElement);
});
