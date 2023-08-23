export default class Section {
  constructor({ data, renderer }, selector) {
    this._rendererData = data;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._rendererData.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}
