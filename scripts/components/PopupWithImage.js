import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._imageCaption = this._popup.querySelector('.popup__caption');
  }

  open() {
    this._image.src = '';
    this._image.alt = '';
    this._imageCaption.textContent = '';
    super.open();
  }
}
