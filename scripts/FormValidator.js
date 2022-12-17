import { selectData } from './variables.js';

export class FormValidator {
    constructor(selectData, form) {
        this._inputSelector = selectData.inputSelector,
            this._submitButtonSelector = selectData.submitButtonSelector,
            this._inactiveButtonClass = selectData.inactiveButtonClass,
            this._inputErrorClass = selectData.inputErrorClass,
            this._errorClass = selectData.errorClass,
            this._form = form
    }

    _showInputError(formElement, inputElement, errorMessage, selectData) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(selectData.inputErrorClass);
        errorElement.classList.add(selectData.errorClass);
        errorElement.textContent = errorMessage;
    }

    /* нет ошибки */
    _hideInputError(formElement, inputElement, selectData) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(selectData.inputErrorClass);
        errorElement.classList.remove(selectData.errorClass);
        errorElement.textContent = '';
    }

    /* переключатель ошибки */
    _checkInputValidity(formElement, inputElement, selectData) {
        if (!inputElement.validity.valid) {
            showInputError(formElement, inputElement, inputElement.validationMessage, selectData);
        } else {
            hideInputError(formElement, inputElement, selectData);
        }
    }

    /* настройка слушателей */
    _setEventListeners(formElement, selectData) {
        const inputList = Array.from(formElement.querySelectorAll(selectData.inputSelector));
        const buttonElement = formElement.querySelector(selectData.submitButtonSelector);
        toggleButtonState(inputList, buttonElement, selectData);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity(formElement, inputElement, selectData);
                toggleButtonState(inputList, buttonElement, selectData);
            });
        });
    };

      /* есть хотя бы один невалидный инпут */
      function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

/* переключатель кнопки */
_toggleButtonState(inputList, buttonElement, selectData) {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, selectData);
    } else {
        buttonElement.classList.remove(selectData.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    };
}
/* выключение кнопки */
disableButton(buttonElement, selectData) {
    buttonElement.classList.add(selectData.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}

/* доступ к валидации */
enableValidation(selectData) {
    const formList = Array.from(document.querySelectorAll(selectData.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, selectData);
    });
}

/* настройки */
enableValidation(selectData);
}