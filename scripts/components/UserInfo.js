export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
    this._name = document.querySelector(this._nameSelector);
    this._about = document.querySelector(this._aboutSelector);
  }

  getUserInfo() {
    const info = {
      name: this._name.textContent,
      about: this._about.textContent
    }
    return info;
  }

  setUserInfo(info) {
    this._name.textContent = info.name;
    this._about.textContent = info.about;
  }
}
