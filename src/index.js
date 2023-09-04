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
  formNewCard,
  popupFullImage,
  validationConfig,
} from "./utils/constants";

import UserInfo from "./components/UserInfo";
import { api } from "./components/Api";
import Card from "./components/Card";
import Section from "./components/Section";
import PopupWithForm from "./components/PopupWithForm";
import PopupWithImage from "./components/PopupWithImage";
import FormValidator from "./components/FormValidator";

const validatorAvatarForm = new FormValidator(validationConfig, editAvatarForm);
const validatorEditForm = new FormValidator(validationConfig, editForm);
const validatorFormNewCard = new FormValidator(validationConfig, formNewCard);

const user = new UserInfo(profileSelectors);

const popupEditProfileInfo = new PopupWithForm(
  popupEditProfile,
  validatorEditForm,
  handleProfileFormSubmit
);
const popupUserAvatar = new PopupWithForm(
  popupAvatar,
  validatorAvatarForm,
  handleEditAvatarFormSubmit
);
const popupNewCard = new PopupWithForm(
  popupAddCard,
  validatorFormNewCard,
  handleAddCardFormSubmit
);

const popupWithImage = new PopupWithImage(popupFullImage);
let cardsSection = new Section({}, cardListSelector);

Promise.all([api.getUser(), api.getCards()])
  .then((res) => {
    const [userData, cards] = res;
    localStorage.setItem("user", JSON.stringify(userData));

    cardsSection.renderItems({
      rendererData: cards,
      renderer: createCard,
    });

    user.setUserData(userData);
    user.setUserAvatar(userData);
  })
  .catch((e) => console.error(e));

function createCard(itemCard) {
  const card = new Card(itemCard, {
    popupWithImage,
    setLike: api.setLike.bind(api),
    deleteLike: api.deleteLike.bind(api),
    deleteCard: api.deleteCard.bind(api),
  });

  return cardsSection.addItem(card.generate());
}

// Popup //

const {
  ["user-name"]: formUserName,
  ["user-description"]: formUserDescription,
} = editForm.elements;

const {
  ["title-input"]: nameImageInput,
  ["image-link-input"]: linkImageInput,
} = formNewCard.elements;

addCardBtn.addEventListener("click", () => popupNewCard.open());
editAvatarBtn.addEventListener("click", () => popupUserAvatar.open());

profileEditBtn.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  popupEditProfileInfo.open();
});

// handle form //

function handleProfileFormSubmit() {
  function makeRequest() {
    return api
      .setUserInfo(formUserName.value, formUserDescription.value)
      .then((userData) => user.setUserData(userData))
      .catch((err) => console.error(`Ошибка: ${err}`));
  }

  return makeRequest();
}

function handleEditAvatarFormSubmit() {
  function makeRequest() {
    return api
      .setUserAvatar({ avatar: avatarLink.value })
      .then((userData) => {
        user.setUserAvatar(userData);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  }
  return makeRequest();
}

function handleAddCardFormSubmit() {
  function makeRequest() {
    return api
      .postCard(nameImageInput.value, linkImageInput.value)
      .then((card) => createCard(card))
      .catch((err) => console.error(`Ошибка: ${err}`));
  }

  return makeRequest();
}
