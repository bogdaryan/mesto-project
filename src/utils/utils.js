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

export function submit(request, e, loadingText = "Сохранение...") {
  e.preventDefault();

  const submitButton = e.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);

  request()
    .then(() => {
      submitButton.classList.add("form__submit_disabled");
      submitButton.disabled = true;

      e.target.reset();
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => renderLoading(false, submitButton, initialText));
}
