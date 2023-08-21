import "./pages/index.css";
import {
  profileSelectors,
  cardListSelector,
  addCardBtn,
  profileEditBtn,
  popupEditProfile,
  popupAddCard,
  popupAvatar,
  editAvatarBtn,
  profileName,
  userDescription,
  editForm,
} from "./utils/constants";
import { UserInfo } from "./components/UserInfo";
import { api } from "./components/Api";
import { Card } from "./components/Card";
import { Section } from "./components/Section";
import { Popup } from "./components/Popup";

// import { FormValidator } from "./components/validate.js";

// const editAvatarForm = document.forms["edit-avatar"];
// const avatarLink = editAvatarForm.elements["avatar-input"];

const user = new UserInfo(profileSelectors);

Promise.all([api.userInfo(), api.getServerCards()])
  .then((res) => {
    const [userData, cards] = res;

    const listCards = new Section(
      {
        data: cards,
        renderer: (item) => {
          const card = new Card(item);
          const cardElement = card.generate();
          listCards.addItem(cardElement);
        },
      },
      cardListSelector
    );

    listCards.renderItems();

    user.setUserData(userData);
    user.setUserAvatar(userData);
  })
  .catch((e) => console.error(e));

// Popup //
const formUserName = editForm.elements["user-name"];
const formUserDescription = editForm.elements["user-description"];

addCardBtn.addEventListener("click", () => {
  new Popup(popupAddCard).open();
});

profileEditBtn.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  new Popup(popupEditProfile).open();
});

editAvatarBtn.addEventListener("click", () => {
  new Popup(popupAvatar).open();
});

// function handleProfileFormSubmit(e) {
//   function makeRequest() {
//     return setUserInfo(formUserName.value, formUserDescription.value).then(
//       (userData) => {
//         profileName.textContent = userData.name;
//         userDescription.textContent = userData.about;
//       }
//     );
//   }
//   handleSubmit(makeRequest, e);
// }

// function handleEditAvatarFormSubmit(e) {
//   function makeRequest() {
//     return setUserAvatar({ avatar: avatarLink.value }).then((user) => {
//       avatarImage.src = user.avatar;
//     });
//   }

//   handleSubmit(makeRequest, e);
// }

// enableValidation({
//   formSelector: "form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__submit",
//   inactiveButtonClass: "form__submit_disabled",
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__input-error_visible",
// });

// editAvatarForm.addEventListener("submit", handleEditAvatarFormSubmit);
// editForm.addEventListener("submit", handleProfileFormSubmit);
