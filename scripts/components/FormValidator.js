export default class FormValidator {
  constructor(validationData, formElement) {
    this._validationData = validationData;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationData.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationData.submitButtonSelector);
  }

  _getErrorElement(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._validationData.inputErrorClass);
    this._errorElement.classList.add(this._validationData.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._validationData.inputErrorClass);
    this._errorElement.classList.remove(this._validationData.errorClass);
    this._errorElement.textContent = '';
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._getErrorElement(inputElement);
      this._showInputError(inputElement);
    } else {
      this._getErrorElement(inputElement);
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._buttonElement.classList.remove(this._validationData.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    };
  }

  _disableButton() {
    this._buttonElement.classList.add(this._validationData.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  resetValidation() {
    this._disableButton();
    this._inputList.forEach((inputElement) => {
      this._getErrorElement(inputElement);
      this._hideInputError(inputElement);
    })
  }

  _setEventListeners() {
    this._toggleButtonState()
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
