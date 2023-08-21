import { apiConfig } from "../utils/constants";

class Api {
  constructor({ url, headers }) {
    this.baseUrl = url;
    this.headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }

  _request(path, options) {
    return fetch(`${this.baseUrl}${path}`, options).then(
      this._checkResponse.bind(this)
    );
  }

  userInfo() {
    return this._request("/users/me", { headers: this.headers });
  }

  getServerCards() {
    return this._request("/cards", { headers: this.headers });
  }

  profileDataDefault(profileData) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: profileData.username,
        about: profileData.description,
      }),
    });
  }

  avatarPictureDefault(avatarLink) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatarLink.avatar,
      }),
    });
  }

  postCard(name, link) {
    return this._request("/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, link }),
    });
  }

  likeCard(cardId) {
    return this._request(`/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    });
  }

  dislikeCard(cardId) {
    return this._request(`/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }

  deleteCard(cardId, cardElement) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }
}

const api = new Api(apiConfig);

export { api };
