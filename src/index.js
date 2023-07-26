import "./pages/index.css";
import { generateCards } from "./components/cards.js";
import { editPopup } from "./components/modal.js";
import {
  closePopup,
  profileName,
  userDescription,
  formUserName,
  formUserDescription,
  editForm,
} from "./components/utils.js";
import { enableValidation } from "./components/validate.js";

generateCards();

// edit profile //
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  profileName.textContent = formUserName.value;
  userDescription.textContent = formUserDescription.value;

  editForm.reset();
  closePopup(editPopup);
});

enableValidation({
  formSelector: "form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
