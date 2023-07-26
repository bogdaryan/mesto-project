export const profileName = document.querySelector(".profile__name");
export const userDescription = document.querySelector(".profile__description");

export const editForm = document.forms["edit-form"];
export const formUserName = editForm.elements["user-name"];
export const formUserDescription = editForm.elements["user-description"];

function setCloseByEscape(page, popup) {
  page.addEventListener("keyup", (e) => {
    if (e.key === "Escape") closePopup(popup);
  });
}

export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  setCloseByEscape(window, popup);
};

export const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  window.removeEventListener("keyup", setCloseByEscape);
};
