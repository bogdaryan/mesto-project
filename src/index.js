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
  handleSubmit,
} from "./components/utils.js";
import { enableValidation } from "./components/validate.js";
import {
  getUser,
  setUserInfo,
  setUserAvatar,
  getCards,
} from "./components/api.js";

const avatarImage = document.querySelector(".profile__image");
const editAvatarForm = document.forms["edit-avatar"];
const avatarLink = editAvatarForm.elements["avatar-input"];
const user = await getUser().then((user) => {
  avatarImage.src = user.avatar;
});

Promise.all([getUser(), getCards()]).then((res) => {
  let [userData, cards] = res;

  generateCards(cards);
  setCurrentUserInfo(userData);
});

// edit profile //
function setCurrentUserInfo(user) {
  profileName.textContent = user.name;
  userDescription.textContent = user.about;
}

function handleProfileFormSubmit(e) {
  function makeRequest() {
    return setUserInfo(formUserName.value, formUserDescription.value).then(
      (userData) => {
        profileName.textContent = userData.name;
        userDescription.textContent = userData.about;
      }
    );
  }
  handleSubmit(makeRequest, e);
}

function handleEditAvatarFormSubmit(e) {
  function makeRequest() {
    return setUserAvatar({ avatar: avatarLink.value }).then((user) => {
      avatarImage.src = user.avatar;
    });
  }

  handleSubmit(makeRequest, e);
}

enableValidation({
  formSelector: "form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
});

editAvatarForm.addEventListener("submit", handleEditAvatarFormSubmit);
editForm.addEventListener("submit", handleProfileFormSubmit);
