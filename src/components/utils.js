export const profileName = document.querySelector(".profile__name");
export const userDescription = document.querySelector(".profile__description");

export const editForm = document.forms["edit-form"];
export const formUserName = editForm.elements["user-name"];
export const formUserDescription = editForm.elements["user-description"];

function closeByEscape(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}
