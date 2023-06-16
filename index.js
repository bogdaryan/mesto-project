const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Мост",
    link: "https://img.freepik.com/free-photo/palace-bridge-morning_1398-1428.jpg",
  },
];

const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#template-card").content;

initialCards.forEach(function createCard(card) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__img").src = card.link;
  cardElement.querySelector(".card__img").alt = card.name;

  cardElement.querySelector(".card__title").textContent = card.name;

  cardList.append(cardElement);
});
