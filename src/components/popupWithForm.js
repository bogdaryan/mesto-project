import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupElement, validator, handleFormSubmit) {
    super(popupElement);
    this._form = popupElement.querySelector(".form");
    this._validator = validator;
    this._handleFormSubmit = handleFormSubmit;

    this._addEventListener();
  }

  open() {
    super.open();
    this._validator.enableValidation();
  }

  close() {
    super.close();
    this._form.reset();
    this._validator.resetValidation();
  }

  _renderLoading(
    isLoading,
    button,
    buttonText = "Сохранить",
    loadingText = "Сохранение..."
  ) {
    if (isLoading) {
      button.textContent = loadingText;
    } else {
      button.textContent = buttonText;
    }
  }

  handleSubmit(e, loadingText = "Сохранение...") {
    e.preventDefault();

    const submitButton = e.submitter;
    const initialText = submitButton.textContent;
    this._renderLoading(true, submitButton, initialText, loadingText);

    this._handleFormSubmit()
      .then(() => {
        this.close();

        submitButton.classList.add("form__submit_disabled");
        submitButton.disabled = true;

        e.target.reset();
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
      .finally(() => this._renderLoading(false, submitButton, initialText));
  }

  _addEventListener() {
    this._form.addEventListener("submit", this.handleSubmit.bind(this));
  }
}
