import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this.title = this._popupElement.querySelector(
      ".popup-type_full-size__title"
    );
    this.image = this._popupElement.querySelector(
      ".popup-type_full-size__image"
    );
  }

  open(title, image) {
    super.open();

    this.title.textContent = title;
    this.image.src = image.src;
    this.image.alt = title.alt;
  }
}
