import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gridCardsContainer = document.querySelector(".gallery");
const gridCards = createGridCardsGallery(galleryItems);

gridCardsContainer.insertAdjacentHTML("afterbegin", gridCards);

gridCardsContainer.addEventListener("click", gridCardsContainerClick);

function createGridCardsGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function gridCardsContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("img")) {
    return;
  }
  console.log(event.target.dataset.source);
}

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

instance.show();