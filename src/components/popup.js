export class Popup {
  constructor(popupElement) {
    this.popupElement = popupElement;
  }

  open() {
    this.popupElement.classList.add("popup_opened");
  }

  close() {
    this.popupElement.classList.remove("popup_opened");
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
