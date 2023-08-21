class UserInfo {
  constructor({
    usernameSelector,
    userDescriptionSelector,
    userAvatarSelector,
  }) {
    this._username = document.querySelector(usernameSelector);
    this._userDescription = document.querySelector(userDescriptionSelector);
    this._avatarLink = document.querySelector(userAvatarSelector);
  }

  getUserData() {
    return {
      username: this._username.textContent,
      description: this._userDescription.textContent,
    };
  }

  setUserData({ name, about }) {
    this._username.textContent = name;
    this._userDescription.textContent = about;
  }

  setUserAvatar({ avatar }) {
    this._avatarLink.src = avatar;
  }
}

export { UserInfo };
