
/* ошибка */
const showInputError = (formElement, inputElement, errorMessage, selectData) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectData.inputErrorClass);
  errorElement.classList.add(selectData.errorClass);
  errorElement.textContent = errorMessage;
};

/* нет ошибки */
const hideInputError = (formElement, inputElement, selectData) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectData.inputErrorClass);
  errorElement.classList.remove(selectData.errorClass);
  errorElement.textContent = '';
};

/* переключатель ошибки */
const checkInputValidity = (formElement, inputElement, selectData) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectData);
  } else {
    hideInputError(formElement, inputElement, selectData);
  }
};

/* настройка слушателей */
const setEventListeners = (formElement, selectData) => {
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
};

/* переключатель кнопки */
const toggleButtonState = (inputList, buttonElement, selectData) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, selectData);
  } else {
    buttonElement.classList.remove(selectData.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  };
}

const disableButton = (buttonElement, selectData) => {
  buttonElement.classList.add(selectData.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};

/* доступ к валидации */
function enableValidation(selectData) {
  const formList = Array.from(document.querySelectorAll(selectData.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, selectData);
  });
};

/* настройки */
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
