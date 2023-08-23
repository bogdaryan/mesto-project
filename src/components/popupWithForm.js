import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupElement, { onFormSubmit }) {
    super(popupElement);
    this._onFormSubmit = onFormSubmit;
    this._popupForm = this._popupItem.querySelector(".form");
    this._inputList = Array.from(
      this._popupForm.querySelectorAll(".form__input")
    );
    this._submitButton = this._popupItem.querySelector(".form__submit");
    this._submitButtonText = this._submitButton.textContent;
  }

  _collectInputValues() {
    const formValues = {};
    this._inputList.forEach((inputItem) => {
      formValues[inputItem.name] = inputItem.value;
    });
    return formValues;
  }

  addEventListeners() {
    super.addEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._onFormSubmit(this._collectInputValues());
    });
  }
}
