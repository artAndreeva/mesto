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

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__image').src = this._image;
        this._element.querySelector('.card__image').alt = this._imageCaption;
        this._element.querySelector('.card__text').textContent = this._imageCaption;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.card__button').addEventListener('click', () => {
            this.likePicture();
        });
        this._element.querySelector('.card__delete').addEventListener('click', () => {
            this.deletePicture();
        });
        this._element.querySelector('.card__image').addEventListener('click', () => {
            this.createImagePopup();
        });
    }

    likePicture() {
        this._element.querySelector('.card__button').classList.toggle('card__button_active');
    }

    deletePicture() {
        this._element.querySelector('.card__button').closest('.card').remove();
    }

    createImagePopup() {
        popupImage.src = this._image;
        popupImage.alt = this._imageCaption;
        popupCaption.textContent = this._imageCaption;
        openPopup(popupImageElement);
    }
}
