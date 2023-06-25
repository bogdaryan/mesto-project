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

function render() {
  generateCards();
}


// Create Cards //
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#template-card").content;

function generateCards() {
  cardList.innerHTML = " ";

  initialCards.forEach(function createCard(card) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

    cardElement.querySelector(".card__img").src = card.link;
    cardElement.querySelector(".card__img").alt = card.name;
    cardElement.querySelector(".card__title").textContent = card.name;

    cardList.prepend(cardElement);
  });
}
render();


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
      (e.target.className != "form__btn-submit" || isEmptyFields(e))
    ) return

    const popup = e.target.closest('.popup')
    popup.classList.add("popup_closed");

    setTimeout(() => {
      popup.classList.remove("popup_opened");
      popup.classList.remove("popup_closed");
    }, 150);

  });
}

closePopup(editPopup);
closePopup(newItemPopup);


// Delete card //
const cardsList = document.querySelector(".cards__list");
const cardButtonDelete = document.querySelector(".card__btn-delete");

cardList.addEventListener("click", (e) => {
  if (e.target.className != "card__btn-delete") return;
  const card = e.target.closest(".card");
  const targetTitle = card.querySelector(".card__title").textContent;

  const targetIndex = initialCards.findIndex((card) => {
    return card.name.includes(targetTitle);
  });

  initialCards.splice(targetIndex, 1);

  render();
});


// add Card //
const imageName = document.querySelector("#image-title");
const imageLink = document.querySelector("#image-src");

newItemPopup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className != "form__btn-submit" || isEmptyFields(e)) return;
  
  initialCards.push({
    name: imageName.value,
    link: imageLink.value,
  });

  render();
});


// edit profile //
editPopup.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className != "form__btn-submit" || isEmptyFields(e)) return;

  profileName.textContent = formUserName.value;
  userDescription.textContent = formUserDescription.value;

  render();
});


// like //
cardList.addEventListener("click", (e) => {
  if (!e.target.className.includes("card__btn-like" || "card__btn-like_active")) return;

  e.target.classList.toggle("card__btn-like_active");
});


// helpers //
function isEmptyFields(e) {
  const popup = e.target.closest('.popup')
  const inputs = popup.querySelectorAll('.form__input-text')
  const firstInput = inputs[0].value
  const secondInput = inputs[1].value

  return Boolean(!firstInput) || Boolean(!secondInput)

}
