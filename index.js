const initialCards = [
  {
    name: "Молдаванка",
    link: "https://cdn.fishki.net/upload/post/2019/01/30/2856758/1f35052999b3b30e3ac95f02d5d8f621.jpg",
  },
  {
    name: "Аркадия",
    link: "https://ic.pics.livejournal.com/alise_alice/17440242/17819/17819_900.jpg",
  },
  {
    name: "Посёлок Котовского",
    link: "https://sun6-23.userapi.com/s/v1/if1/Qm6dKAYZaFi5nu3fNRqdo5lx_dp-8Yba3YpXK984rIzHWQSHdyj6qMKk6twjsGP8jMI5zg.jpg?size=1280x1280&quality=96&crop=258,0,1280,1280&ava=1",
  },
  {
    name: "Ривьера",
    link: "https://www.menslife.com/upload/iblock/94d/5.jpg",
  },
  {
    name: "Дерибасовская",
    link: "https://megotel.ru/images/hotels/93447/2.jpg",
  },
  {
    name: "Оперный Театр",
    link: "https://img.freepik.com/free-photo/night-view-opera-house-odessa_1153-3600.jpg",
  },
];

// Create Cards //

const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#template-card").content;

initialCards.forEach(function createCard(card) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__img").src = card.link;
  cardElement.querySelector(".card__img").alt = card.name;

  cardElement.querySelector(".card__title").textContent = card.name;

  cardList.append(cardElement);
});

// Open popUps //
const containerProfile = document.querySelector(".profile");

const btnAddPhoto = document.querySelector(".profile__add-btn");
const btnEditProfile = document.querySelector(".profile__edit-btn");
const popupAddPhoto = document.querySelector(".popup_add-photo");
const popupEditProfile = document.querySelector(".popup_edit-profile");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

containerProfile.addEventListener("click", (e) => {
  switch (e.target) {
    case btnEditProfile:
      openPopup(popupEditProfile);
      break;
    case btnAddPhoto:
      openPopup(popupAddPhoto);
  }
});
