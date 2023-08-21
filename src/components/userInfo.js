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

  setUserData({ username, description }) {
    this._username.textContent = username;
    this._userDescription.textContent = description;
  }

  setUserAvatar(avatarLink) {
    this._avatarLink.src = avatarLink;
  }
}

export { UserInfo };
