export default class Popup {
  constructor(popupElement) {
    this.popupElement = popupElement;
  }

  open() {
    this.popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._closeByEscape);
  }

  close() {
    this.popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closeByEscape);
  }

  _closeByEscape(e) {
    if (e.key === "Escape") {
      const openedPopup = document.querySelector(".popup_opened");
      new Popup(openedPopup).close();
    }
  }
}

// Close popup //
window.addEventListener("click", (e) => {
  const isPopUp = e.target.className.includes("popup");
  const isBtnClose = e.target.className.includes("popup__btn-close");

  if (e.target.closest(".popup__inner") && !isBtnClose) return;
  if (!isPopUp) return;

  const popup = e.target.closest(".popup");

  new Popup(popup).close();
});
