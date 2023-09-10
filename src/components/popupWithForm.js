import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupElement, validator, { handleFormSubmit }) {
    super(popupElement);
    this._form = popupElement.querySelector(".form");
    this._validator = validator;
    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));

    this._addEventListener();
    this._validator.enableValidation();
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
    this._form.reset();
    this._validator.resetValidation();
  }

  _getInputsValues() {
    const formValues = {};

    this._inputList.forEach((inputItem) => {
      formValues[inputItem.name] = inputItem.value;
    });

    return formValues;
  }

  handleSubmit(evt) {
    this._handleFormSubmit(this._getInputsValues(), evt, this);
  }

  _addEventListener() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }
}
