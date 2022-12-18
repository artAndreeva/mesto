import {
    popupImageElement,
    popupImage,
    popupCaption
} from './variables.js';

import { openPopup } from './index.js';

export class Card {
    constructor(data, templateSelector) {
        this._image = data.link;
        this._imageCaption = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }

    _setData() {
        this._element.querySelector('.card__image').src = this._image;
        this._element.querySelector('.card__image').alt = this._imageCaption;
        this._element.querySelector('.card__text').textContent = this._imageCaption;

        return this._element;
    }

    _likeCard() {
        this._element.querySelector('.card__button').classList.toggle('card__button_active');
    }

    _deleteCard() {
        this._element.remove();
    }

    _createCardPopup() {
        popupImage.src = this._image;
        popupImage.alt = this._imageCaption;
        popupCaption.textContent = this._imageCaption;
        openPopup(popupImageElement);
    }

    _setEventListeners() {
        this._element.querySelector('.card__button').addEventListener('click', () => {
            this._likeCard();
        });
        this._element.querySelector('.card__delete').addEventListener('click', () => {
            this._deleteCard();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this._createCardPopup();
        });
    }

    createCard() {
        this._element = this._getTemplate();
        this._setData();
        this._setEventListeners();

        return this._element;
    }
}
