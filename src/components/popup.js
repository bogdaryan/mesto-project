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

export const newItemPopup = document.querySelector(".popup_type_add-photo");
export const editPopup = document.querySelector(".popup_type_edit-profile");
export const popupEditAvatar = document.querySelector(
  ".popup_type_edit-avatar"
);

const imageEditBtn = document.querySelector(".profile__image-edit");

// Open popup //
editPopupButton.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  openPopup(editPopup);
});

newItemPopupButton.addEventListener("click", () => openPopup(newItemPopup));
imageEditBtn.addEventListener("click", () => openPopup(popupEditAvatar));

// Close popup //
window.addEventListener("click", (e) => {
  const isPopUp = e.target.className.includes("popup");
  const isBtnClose = e.target.className.includes("popup__btn-close");

  if (e.target.closest(".popup__inner") && !isBtnClose) return;
  if (!isPopUp) return;

  const popup = e.target.closest(".popup");
  closePopup(popup);
});
