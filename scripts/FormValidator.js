export class FormValidator {
    constructor(selectData, formElement) {
        this._selectData = selectData;
        this._formElement = formElement;
    }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._disableButton();
        } else {
            this._buttonElement.classList.remove(this._selectData.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        };
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _disableButton() {
        this._buttonElement.classList.add(this._selectData.inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }

    _checkInputValidity() {
        if (!inputElement.validity.valid) {
            this._showInputError();
        } else {
            this._hideInputError();
        }
    }

    _showInputError() {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        this._inputElement.classList.add(this._selectData.inputErrorClass);
        this._errorElement.classList.add(this._selectData.errorClass);
        this._errorElement.textContent = errorMessage;
    }

    _hideInputError() {
        this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        this._inputElement.classList.remove(this._selectData.inputErrorClass);
        this._errorElement.classList.remove(this._selectData.errorClass);
        this._errorElement.textContent = '';
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._selectData.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._selectData.submitButtonSelector);
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity();
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._setEventListeners();
    }
}