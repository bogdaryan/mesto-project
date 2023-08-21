// import { api } from "./api.js";

// const fullSizePupup = document.querySelector(".popup-type_full-size");
// const bigImage = fullSizePupup.querySelector(".popup-type_full-size__image");
// const titleBigImage = fullSizePupup.querySelector(
//   ".popup-type_full-size__title"
// );
// const user = await getUser()
//   .then((res) => res)
//   .catch((e) => console.error(e));

export class Card {
  constructor(itemCard) {
    this.itemCard = itemCard;
    this.arrLikes = this.itemCard.likes;
  }

  _getElement() {
    const cardElement = document
      .querySelector("#template-card")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generate() {
    this._element = this._getElement();

    this._element.querySelector(".card__img").src = this.itemCard.link;
    this._element.querySelector(".card__img").alt = this.itemCard.name;
    this._element.querySelector(".card__title").textContent =
      this.itemCard.name;

    this._element.querySelector(".card__number-of-likes").textContent =
      this.itemCard.likes.length;

    return this._element;
  }

  // like() {
  //   btnLike.addEventListener("click", (e) => {
  //     const isLikeExist = btnLike.className.includes("card__btn-like_active");

  //     if (!isLikeExist) {
  //       setLike(itemCard._id)
  //         .then((card) => {
  //           btnLike.classList.add("card__btn-like_active");
  //           numberLikes.textContent = card.likes.length;
  //         })
  //         .catch((e) => console.error(e));
  //     } else {
  //       deleteLike(itemCard._id)
  //         .then((card) => {
  //           btnLike.classList.remove("card__btn-like_active");
  //           numberLikes.textContent = card.likes.length;
  //         })
  //         .catch((e) => console.error(e));
  //     }
  //   });
  // }

  //   for (const userWhoLikes of this.arrLikes) {
  //     if (userWhoLikes._id === user._id) {
  //       btnLike.classList.add("card__btn-like_active");
  //     } else {
  //       btnLike.classList.remove("card__btn-like_active");
  //     }
  //   }
  // }

  // open() {
  //   // Open Image
  //   image.addEventListener("click", () => {
  //     openPopup(fullSizePupup);

  //     bigImage.src = itemCard.link;
  //     bigImage.alt = itemCard.name;
  //     titleBigImage.textContent = itemCard.name;
  //   });
  // }

  // delete() {
  //   // Delete
  //   const isUserCard = user._id === itemCard.owner._id;
  //   if (!isUserCard) btnDelete.remove();

  //   btnDelete.addEventListener("click", () => {
  //     deleteCard(itemCard._id)
  //       .then(() => card.remove())
  //       .catch((e) => console.error(e));
  //   });
  // }
}

// export function generateCards(cards) {
//   cardListElement.innerHTML = " ";

//   for (const card of cards) {
//     cardListElement.prepend(new Card(card).generate());
//   }
// }

// const formNewCard = newItemPopup.querySelector(".form");
// const nameImageInput = document.querySelector("#title-input");
// const linkImageInput = document.querySelector("#image-link-input");

// const pushCardToList = (card) => cardListElement.append(initCard(card));

// function handleAddCardFormSubmit(e) {
//   function makeRequest() {
//     return postCard(nameImageInput.value, linkImageInput.value).then((card) =>
//       pushCardToList(card)
//     );
//   }

//   handleSubmit(makeRequest, e);
// }

// formNewCard.addEventListener("submit", handleAddCardFormSubmit);
