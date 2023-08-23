export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: ".form__submit_disabled",
  inputErrorClass: ".popup__text_type-error",
  errorClass: ".popup__input-error_visible",
};

export const apiConfig = {
  url: "https://nomoreparties.co/v1/plus-cohort-27",
  headers: {
    authorization: "47ce978d-8dd3-4a82-9cc9-4dd45f83b925",
    "Content-Type": "application/json",
  },
};

export const profileSelectors = {
  usernameSelector: ".profile__name",
  userDescriptionSelector: ".profile__description",
  userAvatarSelector: ".profile__image",
};

// selectors //
export const cardListSelector = ".cards__list";

// buttons //
export const profileEditBtn = document.querySelector(".profile__edit-btn");
export const addCardBtn = document.querySelector(".profile__add-btn");
export const editAvatarBtn = document.querySelector(".profile__image-edit");

// popup //
export const popupEditProfile = document.querySelector(
  ".popup_type_edit-profile"
);
export const popupAddCard = document.querySelector(".popup_type_add-photo");
export const popupAvatar = document.querySelector(".popup_type_edit-avatar");
export const popupFullImage = document.querySelector(".popup-type_full-size");

// elements //
export const profileName = document.querySelector(".profile__name");
export const userDescription = document.querySelector(".profile__description");

export const editForm = document.forms["edit-form"];
export const editAvatarForm = document.forms["edit-avatar"];

export const avatarLink = editAvatarForm.elements["avatar-input"];
