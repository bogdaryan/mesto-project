// Buttons
const newItemPopupButton = document.querySelector(".profile__add-btn");
const editPopupButton = document.querySelector(".profile__edit-btn");
// Popups
const newItemPopup = document.querySelector(".popup_type_add-photo");
const editPopup = document.querySelector(".popup_type_edit-profile");
const fullSizePupup = document.querySelector(".popup-type_full-size");

const profileName = document.querySelector(".profile__name");
const userDescription = document.querySelector(".profile__description");
const formUserName = document.querySelector("#user-name");
const formUserDescription = document.querySelector("#user-description");

const cardTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".cards__list");

// Create Cards //
function generateCards() {
  cardList.innerHTML = " ";

  initialCards.forEach((card) => {
    cardList.prepend(initCard(card.name, card.link));
  });
}
generateCards();

// Init Card //
function initCard(name, link) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const image = card.querySelector(".card__img");
  const title = card.querySelector(".card__title");
  const btnLike = card.querySelector(".card__btn-like");
  const btnDelete = card.querySelector(".card__btn-delete");

  image.src = link;
  image.alt = name;
  title.textContent = name;

  // Like
  btnLike.addEventListener("click", (e) =>
    e.target.classList.toggle("card__btn-like_active")
  );

  // Delete
  btnDelete.addEventListener("click", (e) => {
    e.target.closest(".card").remove();
  });

  // Open Image
  const bigImage = fullSizePupup.querySelector(".popup-type_full-size__image");
  const titleBigImage = fullSizePupup.querySelector(
    ".popup-type_full-size__title"
  );

  image.addEventListener("click", (e) => {
    openPopup(fullSizePupup);

    const targetImage = e.target.closest(".card__img");
    const targetTitle = e.target.closest(".card").querySelector(".card__title");

    bigImage.src = targetImage.src;
    bigImage.alt = targetImage.alt;
    titleBigImage.textContent = targetTitle.textContent;
  });

  return card;
}

// add new Card //
const formNewCard = newItemPopup.querySelector(".form");
const nameImageInput = document.querySelector("#image-title");
const linkImageInput = document.querySelector("#image-src");

formNewCard.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = initCard(nameImageInput.value, linkImageInput.value);
  cardList.prepend(card);

  formNewCard.reset();
  closePopup(newItemPopup);
});

// edit profile //
const formEdit = editPopup.querySelector(".form");
formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  profileName.textContent = formUserName.value;
  userDescription.textContent = formUserDescription.value;

  formEdit.reset();
  closePopup(editPopup);
});

// Open popup //
const openPopup = (popup) => popup.classList.add("popup_opened");
editPopupButton.addEventListener("click", () => openPopup(editPopup));
newItemPopupButton.addEventListener("click", () => openPopup(newItemPopup));

// Close popup //
function closePopup(popup) {
  popup.classList.add("popup_closed");

  setTimeout(() => {
    popup.classList.remove("popup_opened");
    popup.classList.remove("popup_closed");
  }, 245);
}

const page = document.querySelector(".page");
page.addEventListener("click", (e) => {
  if (!e.target.className.includes("popup__btn-close")) return;
  const popup = e.target.closest(".popup");

  closePopup(popup);
});
