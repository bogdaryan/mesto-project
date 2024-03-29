import { user } from "../utils/constants";

export default class Card {
  constructor(itemCard, { popupWithImage, setLike, deleteLike, deleteCard }) {
    this._itemCard = itemCard;
    this._arrLikes = this._itemCard.likes;
    this._element = this._getElement();

    this._image = this._element.querySelector(".card__img");
    this._title = this._element.querySelector(".card__title");
    this._btnDelete = this._element.querySelector(".card__btn-delete");
    this._btnLike = this._element.querySelector(".card__btn-like");
    this._numberLikes = this._element.querySelector(".card__number-of-likes");

    this._popup = popupWithImage;
    this._setLike = setLike;
    this._deleteLike = deleteLike;
    this._deleteCard = deleteCard;

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
    if (!isUserCard) this.remove(this._btnDelete);

    this._element.querySelector(".card__img").src = this._itemCard.link;
    this._element.querySelector(".card__img").alt = this._itemCard.name;
    this._element.querySelector(".card__title").textContent =
      this._itemCard.name;

    this._element.querySelector(".card__number-of-likes").textContent =
      this._itemCard.likes.length;

    return this._element;
  }

  _toggleLike() {
    const isLikeExist = this._btnLike.className.includes(
      "card__btn-like_active"
    );

    if (!isLikeExist) {
      this._setLike();
    } else {
      this._deleteLike();
    }
  }

  setLike(likesCount) {
    this._btnLike.classList.add("card__btn-like_active");
    this._numberLikes.textContent = likesCount;
  }

  deleteLike(likesCount) {
    this._btnLike.classList.remove("card__btn-like_active");
    this._numberLikes.textContent = likesCount;
  }

  _open() {
    this._popup.open(this._title.textContent, this._image);
  }

  delete() {
    this.remove(this._element);
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
    this._btnLike.addEventListener("click", this._toggleLike.bind(this));
    this._btnDelete.addEventListener("click", this._deleteCard.bind(this));
    this._image.addEventListener("click", this._open.bind(this));
  }

  remove(el) {
    el.remove();
  }
}
