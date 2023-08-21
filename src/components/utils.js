export const validationSelectors = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: ".form__submit_disabled",
  inputErrorClass: ".popup__text_type-error",
  errorClass: ".popup__input-error_visible",
};

const profileEditingButton = document.querySelector(".profile__edit-btn");
const addCardButton = document.querySelector(".profile__add-btn");
const popupProfile = document.querySelector("#popup-edit-profile");
const profileForm = popupProfile.querySelector(
  "#popup-edit-profile-form"
);
const popupAddCard = document.querySelector("#popup-add-card");
const formAddCard = popupAddCard.querySelector("#popup-add-card-form");
const profileFormNameInput = popupProfile.querySelector("#popup-edit-profile-form-name");
const profileFormAboutInput = popupProfile.querySelector("#popup-edit-profile-form-description");
const popupAvatar = document.querySelector("#popup-edit-avatar");
const popupAvatarEditForm = popupAvatar.querySelector(
  "#popup-edit-avatar-form"
);
const iconAvatarEdit = document.querySelector(".profile__image-container");

export {
  profileEditingButton as profileEditingIcon,
  addCardButton as iconAddCard,
  popupProfile as popupProfile,
  popupAddCard as popupCards,
  profileForm as formProfile,
  profileFormNameInput as nameInput,
  profileFormAboutInput as descriptionInput,
  formAddCard as formCards,
  popupAvatarEditForm,
  iconAvatarEdit,
};
