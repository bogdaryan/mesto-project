import Popup from "./Popup";
import { validationConfig } from "../utils/constants";
import FormValidator from "./FormValidator";

export default class PopupWithForm extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._formOfPopup = popupElement.querySelector(".form");
    this._validator = new FormValidator(validationConfig, this._formOfPopup);
  }

  open() {
    super.open();
    this._validator.enableValidation();
  }

  close() {
    this._formOfPopup.reset();
    this._validator.resetValidation();

    super.close();
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

  handleSubmit(request, e, loadingText = "Сохранение...") {
    e.preventDefault();

    const submitButton = e.submitter;
    const initialText = submitButton.textContent;
    this._renderLoading(true, submitButton, initialText, loadingText);

    request()
      .then(() => {
        const openedPopup = document.querySelector(".popup_opened");
        new Popup(openedPopup).close();

        submitButton.classList.add("form__submit_disabled");
        submitButton.disabled = true;

        e.target.reset();
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
      .finally(() => this._renderLoading(false, submitButton, initialText));
  }
}
