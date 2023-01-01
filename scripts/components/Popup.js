export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._overlay = this._popup.querySelector('.popup');
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    })
    this._overlay.addEventListener('click', () => {
      this.close();
    })
  }
}
