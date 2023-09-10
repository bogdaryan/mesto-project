export default class Section {
  constructor({ data, renderer }, selector) {
    this._rendererData = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems({
    rendererData = this._rendererData,
    renderer = this._renderer,
  }) {
    rendererData.forEach((item) => renderer(item));
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}
