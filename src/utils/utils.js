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

export function submit(request, e, popup, loadingText = "Сохранение...") {
  e.preventDefault();

  const submitButton = e.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);

  request()
    .then(() => popup.close())
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => renderLoading(false, submitButton, initialText));
}
