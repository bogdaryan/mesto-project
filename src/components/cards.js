import { closePopup, openPopup } from "./utils.js";
import { initialCards } from "./data.js";
import { newItemPopup } from "./modal.js";

const cardTemplate = document.querySelector("#template-card").content;
const fullSizePupup = document.querySelector(".popup-type_full-size");
const bigImage = fullSizePupup.querySelector(".popup-type_full-size__image");
const titleBigImage = fullSizePupup.querySelector(
  ".popup-type_full-size__title"
);
const cardList = document.querySelector(".cards__list");

function initCard(name, link) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const image = card.querySelector(".card__img");
  const title = card.querySelector(".card__title");
  const btnLike = card.querySelector(".card__btn-like");
  const btnDelete = card.querySelector(".card__btn-delete");

  image.src = link;
  image.alt = name;
  title.textContent = name;

  // Like
  btnLike.addEventListener("click", (e) =>
    e.target.classList.toggle("card__btn-like_active")
  );

  // Delete
  btnDelete.addEventListener("click", (e) => {
    e.target.closest(".card").remove();
  });

  // Open Image
  image.addEventListener("click", (e) => {
    openPopup(fullSizePupup);

    bigImage.src = link;
    bigImage.alt = name;
    titleBigImage.textContent = name;
  });

  return card;
}

export function generateCards() {
  cardList.innerHTML = " ";

  initialCards.forEach((card) => {
    cardList.prepend(initCard(card.name, card.link));
  });
}

const formNewCard = newItemPopup.querySelector(".form");
const nameImageInput = document.querySelector("#title-input");
const linkImageInput = document.querySelector("#image-link-input");

formNewCard.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = initCard(nameImageInput.value, linkImageInput.value);
  cardList.prepend(card);

  formNewCard.reset();

  closePopup(newItemPopup);
});
