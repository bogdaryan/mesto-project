const setCloseByEscape = (page, popup) => {
  page.addEventListener("keyup", (e) => {
    if (e.key === "Escape") closePopup(popup);
  });
};

export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  setCloseByEscape(window, popup);
};

export const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  window.removeEventListener("keyup", setCloseByEscape);
};
