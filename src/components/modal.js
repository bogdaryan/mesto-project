import { openPopup, closePopup } from "./utils.js";

const newItemPopupButton = document.querySelector(".profile__add-btn");
const editPopupButton = document.querySelector(".profile__edit-btn");
const newItemPopup = document.querySelector(".popup_type_add-photo");
const editPopup = document.querySelector(".popup_type_edit-profile");

// Open popup //
editPopupButton.addEventListener("click", () => openPopup(editPopup));
newItemPopupButton.addEventListener("click", () => openPopup(newItemPopup));

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
