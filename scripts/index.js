function renderCard(card, container) {
  container.prepend(card);
}

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
  cardImage.addEventListener('click', () => {
    openPopup(popupImageElement);
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
  return cardElement;
}

initialCardsReverse.forEach(function (element) {
  renderCard(createCard(element.link, element.name), cardGallery);
});

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function undefineForm(evt) {
  evt.preventDefault();
}

profileEditElement.addEventListener('click', () => {
  openPopup(popupEditElement);
  inputName.value = profileNameElement.textContent;
  inputAbout.value = profileAboutElement.textContent;
});

profileAddElement.addEventListener('click', () => {
  openPopup(popupAddElement);
});

popupCloseEditElement.addEventListener('click', () => {
  closePopup(popupEditElement);
});
popupCloseAddElement.addEventListener('click', () => {
  closePopup(popupAddElement);
});
popupCloseImageElement.addEventListener('click', () => {
  closePopup(popupImageElement);
});

formSubmitEditElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  profileNameElement.textContent = inputName.value;
  profileAboutElement.textContent = inputAbout.value;
  closePopup(popupEditElement);
});

formSubmitAddElement.addEventListener('submit', (evt) => {
  undefineForm(evt);
  renderCard(createCard(inputImageUrl.value, inputPlaceName.value), cardGallery);
  formSubmitAddElement.reset();
  closePopup(popupAddElement);
});
