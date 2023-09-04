export function handleProfileFormSubmit() {
  function makeRequest() {
    return api
      .setUserInfo(formUserName.value, formUserDescription.value)
      .then((userData) => user.setUserData(userData))
      .catch((err) => console.error(`Ошибка: ${err}`));
  }

  return makeRequest();
}

export function handleEditAvatarFormSubmit() {
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

const {
  ["title-input"]: nameImageInput,
  ["image-link-input"]: linkImageInput,
} = formNewCard.elements;

const cardList = document.querySelector(cardListSelector);

const pushCardToList = (card) => {
  const cardElement = new Card(card).generate();
  cardList.append(cardElement);
};

export function handleAddCardFormSubmit() {
  function makeRequest() {
    return api
      .postCard(nameImageInput.value, linkImageInput.value)
      .then((card) => pushCardToList(card))
      .catch((err) => console.error(`Ошибка: ${err}`));
  }

  return makeRequest();
}
