export class FormValidator {
  constructor(selectData, formElement) {
    this._selectData = selectData;
    this._formElement = formElement;
  }

  _getErrorElement(inputElement) {
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._selectData.inputErrorClass);
    this._errorElement.classList.add(this._selectData.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._selectData.inputErrorClass);
    this._errorElement.classList.remove(this._selectData.errorClass);
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
      this._buttonElement.classList.add(this._selectData.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._selectData.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    };
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._selectData.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._selectData.submitButtonSelector);
    this._toggleButtonState();
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
