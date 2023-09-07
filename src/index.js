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
  editAvatarForm,
  formNewCard,
  popupFullImage,
  validationConfig,
} from "./utils/constants";
import { submit } from "./utils/utils";

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
  {
    handleFormSubmit: (
      { "user-name": name, "user-description": description },
      evt
    ) => {
      const request = handleProfileFormSubmit(name, description);
      submit(request, evt);
    },
  }
);

const popupUserAvatar = new PopupWithForm(popupAvatar, validatorAvatarForm, {
  handleFormSubmit: ({ "avatar-input": link }, evt) => {
    const request = handleEditAvatarFormSubmit(link);
    submit(request, evt);
  },
});

const popupNewCard = new PopupWithForm(popupAddCard, validatorFormNewCard, {
  handleFormSubmit: ({ "image-title": title, "image-src": link }, evt) => {
    const request = handleAddCardFormSubmit(title, link);

    submit(request, evt);
  },
});

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
  const id = itemCard._id;

  const card = new Card(itemCard, {
    popupWithImage,
    setLike: () => {
      api.setLike(id).then(({ likes }) => {
        card.setLike(likes.length);
      });
    },
    deleteLike: () => {
      api.deleteLike(id).then(({ likes }) => {
        card.deleteLike(likes.length);
      });
    },
    deleteCard: () => {
      api.deleteCard(id).then(() => card.delete());
    },
  });

  cardsSection.addItem(card.generate());
}

// Popup //

const { "user-name": formUserName, "user-description": formUserDescription } =
  editForm.elements;

addCardBtn.addEventListener("click", () => popupNewCard.open());
editAvatarBtn.addEventListener("click", () => popupUserAvatar.open());

profileEditBtn.addEventListener("click", () => {
  formUserName.value = profileName.textContent;
  formUserDescription.value = userDescription.textContent;

  popupEditProfileInfo.open();
});

// handle form //

function handleProfileFormSubmit(name, description) {
  function makeRequest() {
    return api
      .setUserInfo(name, description)
      .then((userData) => user.setUserData(userData))
      .catch((err) => console.error(`Ошибка: ${err}`));
  }

  return makeRequest;
}

function handleEditAvatarFormSubmit(link) {
  function makeRequest() {
    return api
      .setUserAvatar({ avatar: link })
      .then((userData) => {
        user.setUserAvatar(userData);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  }
  return makeRequest;
}

function handleAddCardFormSubmit(name, link) {
  function makeRequest() {
    return api
      .postCard(name, link)
      .then((card) => createCard(card))
      .catch((err) => console.error(`Ошибка: ${err}`));
  }

  return makeRequest;
}
