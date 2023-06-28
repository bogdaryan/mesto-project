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

const containerProfile = document.querySelector(".profile");

const newItemPopupButton = document.querySelector(".profile__add-btn");
const editPopupButton = document.querySelector(".profile__edit-btn");
const closeButtons = document.querySelectorAll(".popup__btn-close");

const newItemPopup = document.querySelector(".popup_add-photo");
const editPopup = document.querySelector(".popup_edit-profile");

const profileName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const formUserName = document.querySelector("#user-name");
const formUserDescription = document.querySelector("#user-description");

const cardTemplate = document.querySelector("#template-card").content;
const fullSizeTemplate = document.querySelector("#template-full-size").content;
const cardList = document.querySelector(".cards__list");

// Create Cards //

function generateCards() {
  cardList.innerHTML = " ";
  initialCards.forEach((card) => initCard(card.name, card.link));
}
generateCards();

// func card //
function initCard(name, link) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const fullSizeCard = fullSizeTemplate
    .querySelector(".full-size")
    .cloneNode(true);

  const image = card.querySelector(".card__img");
  const title = card.querySelector(".card__title");
  const btnLike = card.querySelector(".card__btn-like");
  const btnDelete = card.querySelector(".card__btn-delete");

  // set Card props
  image.src = link;
  image.alt = name;
  title.textContent = name;
  cardList.prepend(card);

  // Like
  btnLike.addEventListener("click", (e) =>
    e.target.classList.toggle("card__btn-like_active")
  );

  // Delete
  btnDelete.addEventListener("click", (e) => {
    e.target.closest(".card").remove();
  });

  // event Open Image
  image.addEventListener("click", () => {});
}

// add Card //
const imageNameInput = document.querySelector("#image-title");
const imageLinkInput = document.querySelector("#image-src");

newItemPopup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className != "form__btn-submit") return;

  initialCards.push({
    name: imageNameInput.value,
    link: imageLinkInput.value,
  });

  generateCards();
});

//

//

//

// Open popup //
function openPopup(btn, popup) {
  btn.addEventListener("click", () => popup.classList.add("popup_opened"));
}

openPopup(editPopupButton, editPopup);
openPopup(newItemPopupButton, newItemPopup);

// close popup //
function closePopup(popupElement) {
  popupElement.addEventListener("click", (e) => {
    if (
      e.target.className != "popup__btn-close" &&
      e.target.className != "form__btn-submit"
    )
      return;

    const popup = e.target.closest(".popup");
    popup.classList.add("popup_closed");

    setTimeout(() => {
      popup.classList.remove("popup_opened");
      popup.classList.remove("popup_closed");
    }, 150);
  });
}

closePopup(editPopup);
closePopup(newItemPopup);

// edit profile //
editPopup.addEventListener("click", (e) => {
  if (e.target.className != "form__btn-submit") return;
  e.preventDefault();

  profileName.textContent = formUserName.value;
  userDescription.textContent = formUserDescription.value;
});
