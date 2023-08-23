import { apiConfig } from "../utils/constants";

class Api {
  constructor({ url, headers }) {
    this.baseUrl = url;
    this.headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`код ошибки: ${res.status}`);
  }

  _request(path, options) {
    return fetch(`${this.baseUrl}${path}`, options).then(
      this._checkResponse.bind(this)
    );
  }

  getUser() {
    return this._request("/users/me", { headers: this.headers });
  }

  getCards() {
    return this._request("/cards", { headers: this.headers });
  }

  setUserInfo(name, about) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  setUserAvatar(link) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      headers: api.headers,
      body: JSON.stringify(link),
    });
  }

  postCard(name, link) {
    return this._request("/cards", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, link }),
    });
  }

  setLike(id) {
    return this._request(`/cards/likes/${id}`, {
      method: "PUT",
      headers: this.headers,
    });
  }

  dislikeCard(id) {
    return this._request(`/cards/likes/${id}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }

  deleteCard(id) {
    return this._request(`/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }
}

const api = new Api(apiConfig);

export { api };
