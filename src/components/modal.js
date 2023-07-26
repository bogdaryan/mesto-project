import {
  openPopup,
  closePopup,
  profileName,
  userDescription,
  formUserName,
  formUserDescription,
} from "./utils.js";

const newItemPopupButton = document.querySelector(".profile__add-btn");
const editPopupButton = document.querySelector(".profile__edit-btn");
const newItemPopup = document.querySelector(".popup_type_add-photo");
const editPopup = document.querySelector(".popup_type_edit-profile");

// Open popup //
editPopupButton.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  openPopup(editPopup);
});

newItemPopupButton.addEventListener("click", () => {
  const btn = newItemPopup.querySelector(".form__submit");
  btn.classList.add("form__submit_disabled");
  btn.disabled = true;

  openPopup(newItemPopup);
});

// Close popup //
window.addEventListener("click", (e) => {
  const isPopUp = e.target.className.includes("popup");
  const isBtnClose = e.target.className.includes("popup__btn-close");

  if (e.target.closest(".popup__inner") && !isBtnClose) return;
  if (!isPopUp) return;

  const popup = e.target.closest(".popup");
  closePopup(popup);
});

export { newItemPopup, editPopup };
