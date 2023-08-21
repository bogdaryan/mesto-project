// function closeByEscape(e) {
//   if (e.key === "Escape") {
//     const openedPopup = document.querySelector(".popup_opened");
//     closePopup(openedPopup);
//   }
// }

// export function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closeByEscape);
// }

// export function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closeByEscape);
// }

// function renderLoading(
//   isLoading,
//   button,
//   buttonText = "Сохранить",
//   loadingText = "Сохранение..."
// ) {
//   if (isLoading) {
//     button.textContent = loadingText;
//   } else {
//     button.textContent = buttonText;
//   }
// }

// export function handleSubmit(request, e, loadingText = "Сохранение...") {
//   e.preventDefault();

//   const submitButton = e.submitter;
//   const initialText = submitButton.textContent;
//   renderLoading(true, submitButton, initialText, loadingText);

//   request()
//     .then(() => {
//       closePopup(document.querySelector(".popup_opened"));

//       submitButton.classList.add("form__submit_disabled");
//       submitButton.disabled = true;

//       e.target.reset();
//     })
//     .catch((err) => console.error(`Ошибка: ${err}`))
//     .finally(() => renderLoading(false, submitButton, initialText));
// }
