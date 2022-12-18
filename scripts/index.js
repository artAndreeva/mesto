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
  initialCardsReverse,
  selectData
} from './variables.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

/* поместить карточку */
function renderCard(card, container) {
  container.prepend(card);
}

/* инициация галерея */
initialCardsReverse.forEach((element) => {
  const card = new Card(element, '.card-template_type_default');
  renderCard(card.createCard(), cardGallery)
});

/* закрыть попап по Esc */
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
}

/* закрыть попап по Click */
function closePopupByClick(evt) {
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.target.closest('.popup'));
  } else if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
}

/* открыть попап */
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  document.addEventListener('click', closePopupByClick)
}

/* закрыть попап */
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('click', closePopupByClick)
}

/* сброс настроек формы */
function undefineForm(evt) {
  evt.preventDefault();
}

/* сброс ошибки */
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

/* слушатель на кнопку Edit */
profileEditElement.addEventListener('click', () => {
  openPopup(popupEditElement);
  inputName.value = profileNameElement.textContent;
  inputAbout.value = profileAboutElement.textContent;
  removeError(popupEditElement);
  disableButton(buttonEditSubmit, selectData);
});

/* слушатель на сабмит формы Edit */
formSubmitEditElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  profileNameElement.textContent = inputName.value;
  profileAboutElement.textContent = inputAbout.value;
  closePopup(popupEditElement);
});

/* слушатель на кнопку Add */
profileAddElement.addEventListener('click', () => {
  openPopup(popupAddElement);
  removeError(popupAddElement);
  disableButton(buttonAddSubmit, selectData);
});

const disableButton = (buttonElement, selectData) => {
  buttonElement.classList.add(selectData.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

/* слушатель на сабмит формы Add */
formSubmitAddElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  const link = inputImageUrl.value;
  const name = inputPlaceName.value;
  const card = new Card(({ link, name }), '.card-template_type_default');
  renderCard(card.createCard(), cardGallery);
  closePopup(popupAddElement);
  formSubmitAddElement.reset();
});



const validationAddForm = new FormValidator(selectData, formSubmitAddElement);

validationAddForm.enableValidation();

const validationEditForm = new FormValidator(selectData, formSubmitEditElement);

validationEditForm.enableValidation();