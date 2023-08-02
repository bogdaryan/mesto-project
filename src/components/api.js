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

export function getUser() {
  return fetch(`${api.url}/users/me`, { headers: api.headers }).then(getData);
}

export function setUserInfo(name, about) {
  return fetch(`${api.url}/users/me`, {
    method: "PATCH",
    headers: api.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(getData);
}

export function setUserAvatar(link) {
  return fetch(`${api.url}/users/me/avatar`, {
    method: "PATCH",
    headers: api.headers,
    body: JSON.stringify(link),
  }).then(getData);
}

export function getCards() {
  return fetch(`${api.url}/cards`, { headers: api.headers }).then(getData);
}

export function postCard(name, link) {
  return fetch(`${api.url}/cards`, {
    method: "POST",
    headers: api.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(getData);
}

export function deleteCard(id) {
  return fetch(`${api.url}/cards/${id}`, {
    method: "DELETE",
    headers: api.headers,
  }).then(getData);
}

export function setLike(id) {
  return fetch(`${api.url}/cards/likes/${id}`, {
    method: "PUT",
    headers: api.headers,
  }).then(getData);
}

export function deleteLike(id) {
  return fetch(`${api.url}/cards/likes/${id}`, {
    method: "DELETE",
    headers: api.headers,
  }).then(getData);
}
