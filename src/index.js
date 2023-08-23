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
  avatarLink,
  editAvatarForm,
  validationConfig,
} from "./utils/constants";

import { handleSubmit } from "./utils/utils";

import UserInfo from "./components/UserInfo";
import { api } from "./components/Api";
import Card from "./components/Card";
import Section from "./components/Section";
import Popup from "./components/Popup";
import FormValidator from "./components/ValidationForm";

// new FormValidator(validationConfig);

const user = new UserInfo(profileSelectors);

Promise.all([api.getUser(), api.getCards()])
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

const {
  ["user-name"]: formUserName,
  ["user-description"]: formUserDescription,
} = editForm.elements;

addCardBtn.addEventListener("click", () => new Popup(popupAddCard).open());
editAvatarBtn.addEventListener("click", () => new Popup(popupAvatar).open());

profileEditBtn.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  new Popup(popupEditProfile).open();
});

function handleProfileFormSubmit(e) {
  function makeRequest() {
    return api
      .setUserInfo(formUserName.value, formUserDescription.value)
      .then((userData) => user.setUserData(userData));
  }

  handleSubmit(makeRequest, e);
}

function handleEditAvatarFormSubmit(e) {
  function makeRequest() {
    return api.setUserAvatar({ avatar: avatarLink.value }).then((userData) => {
      user.setUserAvatar(userData);
    });
  }

  handleSubmit(makeRequest, e);
}

editAvatarForm.addEventListener("submit", handleEditAvatarFormSubmit);
editForm.addEventListener("submit", handleProfileFormSubmit);
