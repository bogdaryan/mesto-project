export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
    document.addEventListener("click", this._closeByClick);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
    document.removeEventListener("click", this._closeByClick);
  }

  _closeByEscape = (e) => {
    if (e.key === "Escape") this.close();
  };

  _closeByClick = (e) => {
    const isPopUp = e.target.className.includes("popup");
    const isBtnClose = e.target.className.includes("popup__btn-close");

    if (e.target.closest(".popup__inner") && !isBtnClose) return;
    if (!isPopUp) return;

    this.close();
  };
}
