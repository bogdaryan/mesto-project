import "./pages/index.css";
import { generateCards } from "./components/cards.js";
import { editPopup, popupEditAvatar } from "./components/modal.js";
import {
  closePopup,
  profileName,
  userDescription,
  formUserName,
  formUserDescription,
  editForm,
} from "./components/utils.js";
import { enableValidation } from "./components/validate.js";
import { getUser, setUserInfo, setUserAvatar } from "./components/api.js";

generateCards();

const user = await getUser().then((res) => res);

// edit profile //
function setCurrentUserInfo(user) {
  profileName.textContent = user.name;
  userDescription.textContent = user.about;
}

setCurrentUserInfo(user);

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  setUserInfo(formUserName.value, formUserDescription.value).then((user) => {
    setCurrentUserInfo(user);
  });

  editForm.reset();
  closePopup(editPopup);
});

const avatarImage = document.querySelector(".profile__image");
avatarImage.src = user.avatar;

function handleEditAvatar() {
  const editAvatarForm = document.forms["edit-avatar"];
  const avatarLink = editAvatarForm.elements["avatar-input"];
  const formSubmit = editAvatarForm.querySelector(".form__submit");

  editAvatarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setUserAvatar({ avatar: avatarLink.value }).then((user) => {
      avatarImage.src = user.avatar;
    });

    editAvatarForm.reset();

    closePopup(popupEditAvatar);
  });
}

handleEditAvatar();

enableValidation({
  formSelector: "form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});
