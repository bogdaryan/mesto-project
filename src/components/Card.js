import { api } from "./Api";

const user = await api
  .getUser()
  .then((res) => res)
  .catch((e) => console.error(e));

export default class Card {
  constructor(itemCard, popup) {
    this._itemCard = itemCard;
    this._arrLikes = this._itemCard.likes;
    this._element = this._getElement();

    this._image = this._element.querySelector(".card__img");
    this._title = this._element.querySelector(".card__title");
    this._btnDelete = this._element.querySelector(".card__btn-delete");
    this._btnLike = this._element.querySelector(".card__btn-like");
    this._numberLikes = this._element.querySelector(".card__number-of-likes");
    this.popup = popup;

    this._setClassLikedCards();
    this._setEventListener();
  }

  _getElement() {
    const cardElement = document
      .querySelector("#template-card")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generate() {
    const isUserCard = user._id === this._itemCard.owner._id;
    if (!isUserCard) this._btnDelete.remove();

    this._element.querySelector(".card__img").src = this._itemCard.link;
    this._element.querySelector(".card__img").alt = this._itemCard.name;
    this._element.querySelector(".card__title").textContent =
      this._itemCard.name;

    this._element.querySelector(".card__number-of-likes").textContent =
      this._itemCard.likes.length;

    return this._element;
  }

  _like() {
    const isLikeExist = this._btnLike.className.includes(
      "card__btn-like_active"
    );

    if (!isLikeExist) {
      api
        .setLike(this._itemCard._id)
        .then((card) => {
          this._btnLike.classList.add("card__btn-like_active");
          this._numberLikes.textContent = card.likes.length;
        })
        .catch((e) => console.error(e));
    } else {
      api
        .deleteLike(this._itemCard._id)
        .then((card) => {
          this._btnLike.classList.remove("card__btn-like_active");
          this._numberLikes.textContent = card.likes.length;
        })
        .catch((e) => console.error(e));
    }
  }

  _open() {
    this.popup.open(this._title.textContent, this._image);
  }

  _delete() {
    api
      .deleteCard(this._itemCard._id)
      .then(() => this._element.remove())
      .catch((e) => console.error(e));
  }

  _setClassLikedCards() {
    for (const userWhoLikes of this._arrLikes) {
      if (userWhoLikes._id === user._id) {
        this._btnLike.classList.add("card__btn-like_active");
      } else {
        this._btnLike.classList.remove("card__btn-like_active");
      }
    }
  }

  _setEventListener() {
    this._btnLike.addEventListener("click", this._like.bind(this));
    this._btnDelete.addEventListener("click", this._delete.bind(this));
    this._image.addEventListener("click", this._open.bind(this));
  }
}
