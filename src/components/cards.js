import { closePopup, handleSubmit, openPopup } from "./utils.js";
import { newItemPopup } from "./modal.js";
import {
  deleteCard,
  deleteLike,
  getCards,
  getUser,
  postCard,
  setLike,
} from "./api.js";

const cardTemplate = document.querySelector("#template-card").content;
const fullSizePupup = document.querySelector(".popup-type_full-size");
const bigImage = fullSizePupup.querySelector(".popup-type_full-size__image");
const titleBigImage = fullSizePupup.querySelector(
  ".popup-type_full-size__title"
);
const cardListElement = document.querySelector(".cards__list");

const usersCards = await getCards().then((res) => res);
const user = await getUser().then((res) => res);

function initCard(itemCard) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const image = card.querySelector(".card__img");
  const title = card.querySelector(".card__title");
  const btnLike = card.querySelector(".card__btn-like");
  const numberLikes = card.querySelector(".card__number-of-likes");
  const btnDelete = card.querySelector(".card__btn-delete");

  const arrLikes = itemCard.likes;

  image.src = itemCard.link;
  image.alt = itemCard.name;
  title.textContent = itemCard.name;
  numberLikes.textContent = itemCard.likes.length;

  // Like Event
  btnLike.addEventListener("click", (e) => {
    const isLikeExist = btnLike.className.includes("card__btn-like_active");

    if (!isLikeExist) {
      setLike(itemCard._id)
        .then((card) => {
          btnLike.classList.add("card__btn-like_active");
          numberLikes.textContent = card.likes.length;
        })
        .catch((e) => console.error(e));
    } else {
      deleteLike(itemCard._id)
        .then((card) => {
          btnLike.classList.remove("card__btn-like_active");
          numberLikes.textContent = card.likes.length;
        })
        .catch((e) => console.error(e));
    }
  });

  for (const userWhoLikes of arrLikes) {
    if (userWhoLikes._id === user._id) {
      btnLike.classList.add("card__btn-like_active");
    } else {
      btnLike.classList.remove("card__btn-like_active");
    }
  }

  // Delete
  const isUserCard = user._id === itemCard.owner._id;
  if (!isUserCard) btnDelete.remove();

  btnDelete.addEventListener("click", () => {
    deleteCard(itemCard._id)
      .then(() => {
        card.remove();
      })
      .catch((e) => console.error(e));
  });

  // Open Image
  image.addEventListener("click", () => {
    openPopup(fullSizePupup);

    bigImage.src = itemCard.link;
    bigImage.alt = itemCard.name;
    titleBigImage.textContent = itemCard.name;
  });

  return card;
}

export function generateCards(cards) {
  cardListElement.innerHTML = " ";

  for (const card of cards) {
    cardListElement.prepend(initCard(card));
  }
}

const formNewCard = newItemPopup.querySelector(".form");
const nameImageInput = document.querySelector("#title-input");
const linkImageInput = document.querySelector("#image-link-input");

const pushCardToList = (card) => cardListElement.append(initCard(card));

function handleAddCardFormSubmit(e) {
  function makeRequest() {
    return postCard(nameImageInput.value, linkImageInput.value).then((card) =>
      pushCardToList(card)
    );
  }

  handleSubmit(makeRequest, e);
}

formNewCard.addEventListener("submit", handleAddCardFormSubmit);
