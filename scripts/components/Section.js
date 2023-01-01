export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._itemList = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems() {
    this._itemList.forEach((element) => {
      this._renderer(element);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
