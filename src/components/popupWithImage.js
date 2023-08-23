import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupDescription = this._popupItem.querySelector(
      ".popup-type_full-size__title"
    );
    this._popupImage = this._popupItem.querySelector(
      ".popup-type_full-size__image"
    );
  }

  open(description, image) {
    this._popupDescription.textContent = description;
    this._popupImage.src = image;
    this._popupImage.alt = description;
    super.open();
  }
}
