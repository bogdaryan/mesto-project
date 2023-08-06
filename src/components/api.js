const api = {
  url: "https://nomoreparties.co/v1/plus-cohort-27",
  headers: {
    authorization: "47ce978d-8dd3-4a82-9cc9-4dd45f83b925",
    "Content-Type": "application/json",
  },
};

function getData(res) {
  if (!res.ok) Promise.reject(`Ошибка ${res}`);

  return res.json();
}

function checkResponse(res) {
  if (!res.ok) Promise.reject(`Ошибка ${res}`);

  return res.json();
}

const request = (url, options) => {
  return fetch(api.url + url, options).then(checkResponse);
};

export function getUser() {
  return request("/users/me", { headers: api.headers });
}

export function setUserInfo(name, about) {
  return request("/users/me", {
    method: "PATCH",
    headers: api.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
}

export function setUserAvatar(link) {
  return request("/users/me/avatar", {
    method: "PATCH",
    headers: api.headers,
    body: JSON.stringify(link),
  });
}

export function getCards() {
  return request("/cards", { headers: api.headers });
}

export function postCard(name, link) {
  return request("/cards", {
    method: "POST",
    headers: api.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
}

export function deleteCard(id) {
  return request(`/cards/${id}`, {
    method: "DELETE",
    headers: api.headers,
  });
}

export function setLike(id) {
  return request(`/cards/likes/${id}`, {
    method: "PUT",
    headers: api.headers,
  });
}

export function deleteLike(id) {
  return request(`/cards/likes/${id}`, {
    method: "DELETE",
    headers: api.headers,
  });
}
