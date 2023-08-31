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
} from "./utils/constants";

import UserInfo from "./components/UserInfo";
import { api } from "./components/Api";
import Card from "./components/Card";
import Section from "./components/Section";
import PopupWithForm from "./components/PopupWithForm";
import PopupWithImage from "./components/PopupWithImage";

const user = new UserInfo(profileSelectors);
const popupEditProfileInfo = new PopupWithForm(popupEditProfile);
const popupUserAvatar = new PopupWithForm(popupAvatar);
const popupNewCard = new PopupWithForm(popupAddCard);
const popupWithImage = new PopupWithImage(popupFullImage);

Promise.all([api.getUser(), api.getCards()])
  .then((res) => {
    const [userData, cards] = res;

    const listCards = new Section(
      {
        data: cards,
        renderer: (item) => {
          const card = new Card(item, popupWithImage);
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

addCardBtn.addEventListener("click", () => popupNewCard.open());
editAvatarBtn.addEventListener("click", () => popupUserAvatar.open());

profileEditBtn.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  popupEditProfileInfo.open();
});

window.addEventListener("click", (e) => {
  const isPopUp = e.target.className.includes("popup");
  const isBtnClose = e.target.className.includes("popup__btn-close");

  if (e.target.closest(".popup__inner") && !isBtnClose) return;
  if (!isPopUp) return;

  const popup = document.querySelector(".popup_opened");

  new PopupWithForm(popup).close();
});

// handle form //

function handleProfileFormSubmit() {
  function makeRequest() {
    return api
      .setUserInfo(formUserName.value, formUserDescription.value)
      .then((userData) => user.setUserData(userData));
  }

  return makeRequest();
}

function handleEditAvatarFormSubmit() {
  function makeRequest() {
    return api.setUserAvatar({ avatar: avatarLink.value }).then((userData) => {
      user.setUserAvatar(userData);
    });
  }
  return makeRequest();
}

const {
  ["title-input"]: nameImageInput,
  ["image-link-input"]: linkImageInput,
} = formNewCard.elements;

const cardList = document.querySelector(cardListSelector);

const pushCardToList = (card) => {
  const cardElement = new Card(card).generate();
  cardList.append(cardElement);
};

function handleAddCardFormSubmit() {
  function makeRequest() {
    return api
      .postCard(nameImageInput.value, linkImageInput.value)
      .then((card) => pushCardToList(card));
  }

  return makeRequest();
}

editAvatarForm.addEventListener("submit", (e) => {
  popupUserAvatar.handleSubmit(handleEditAvatarFormSubmit, e);
});

editForm.addEventListener("submit", (e) => {
  popupEditProfileInfo.handleSubmit(handleProfileFormSubmit, e);
});

formNewCard.addEventListener("submit", (e) => {
  popupNewCard.handleSubmit(handleAddCardFormSubmit, e);
});
