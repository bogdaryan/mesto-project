import Popup from "../components/Popup";

function renderLoading(
  isLoading,
  button,
  buttonText = "Сохранить",
  loadingText = "Сохранение..."
) {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
}

export function handleSubmit(request, e, loadingText = "Сохранение...") {
  e.preventDefault();

  const submitButton = e.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);

  request()
    .then(() => {
      const openedPopup = document.querySelector(".popup_opened");
      new Popup(openedPopup).close();

      submitButton.classList.add("form__submit_disabled");
      submitButton.disabled = true;

      e.target.reset();
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => renderLoading(false, submitButton, initialText));
}
