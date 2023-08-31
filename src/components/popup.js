export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
  }

  _closeByEscape(e) {
    if (e.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      new Popup(openedPopup).close();
    }
  }
}
