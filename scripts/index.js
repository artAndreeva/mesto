/* создать карточку */
function createCard(image, text) {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardText = cardElement.querySelector('.card__text');
  const cardButton = cardElement.querySelector('.card__button');
  const cardDelete = cardElement.querySelector('.card__delete');
  cardImage.src = image;
  cardImage.alt = text;
  cardText.textContent = text;

  cardButton.addEventListener('click', likePicture);
  cardDelete.addEventListener('click', deletePicture);
  cardImage.addEventListener('click', () => {
    createPopupImage(cardImage, cardText)
  });

  return cardElement;
};

/* поставить лайк */
function likePicture(evt) {
  evt.target.classList.toggle('card__button_active');
};

/* удалить картинку */
function deletePicture(evt) {
  evt.target.closest('.card').remove();
};

/* создать попап картинки */
function createPopupImage(image, text) {
  popupImage.src = image.src;
  popupImage.alt = image.alt;
  popupCaption.textContent = text.textContent;
  openPopup(popupImageElement);
};

/* поместить карточку */
function renderCard(card, container) {
  container.prepend(card);
};

/* инициация галерея */
initialCardsReverse.forEach(function (element) {
  renderCard(createCard(element.link, element.name), cardGallery)
});

/* закрыть попап по Esc */
function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

/* закрыть попап по Click */
function closePopupByClick(evt) {
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.target.closest('.popup'));
  } else if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};

/* открыть попап */
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
  document.addEventListener('click', closePopupByClick)
};

/* закрыть попап */
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  document.removeEventListener('click', closePopupByClick)
};

/* сброс настроек формы */
function undefineForm(evt) {
  evt.preventDefault();
};

/* слушатель на кнопку Edit */
profileEditElement.addEventListener('click', () => {
  openPopup(popupEditElement);
  inputName.value = profileNameElement.textContent;
  inputAbout.value = profileAboutElement.textContent;
  disableButton(document.querySelector('.popup__button'), );
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
  disableButton();
});

/* слушатель на сабмит формы Add */
formSubmitAddElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  renderCard(createCard(inputImageUrl.value, inputPlaceName.value), cardGallery);
  closePopup(popupAddElement);
  formSubmitAddElement.reset();
});

