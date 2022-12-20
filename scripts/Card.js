export class Card {
  constructor(data, templateSelector, createCardPopup) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._createCardPopup = createCardPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _getElements() {
    this._photo = this._element.querySelector('.card__image');
    this._likeButton = this._element.querySelector('.card__button');
    this._deleteButton = this._element.querySelector('.card__delete');
    this._caption = this._element.querySelector('.card__text');
  }

  _setData() {
    this._photo.src = this._link;
    this._photo.alt = this._name;
    this._caption.textContent = this._name;
    return this._element;
  }

  _likeCard() {
    this._likeButton.classList.toggle('card__button_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._likeCard();
    });
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });
    this._photo.addEventListener('click', () => {
      this._createCardPopup(this._link, this._name);
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._getElements()
    this._setData();
    this._setEventListeners();
    return this._element;
  }
}
