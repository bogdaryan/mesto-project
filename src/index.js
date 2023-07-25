import "./pages/index.css";
import { generateCards } from "./components/cards.js";
import { editPopup } from "./components/modal.js";
import { closePopup } from "./components/utils.js";
import { enableValidation } from "./components/validate.js";

generateCards();

const editForm = document.forms["edit-form"];
const profileName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");

const formUserName = editForm.elements["user-name"];
const formUserDescription = editForm.elements["user-description"];

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
