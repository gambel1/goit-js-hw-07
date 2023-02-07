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
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
    </li>`;
    })
    .join("");
}

function gridCardsContainerClick(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  });
  // if (!event.target.classList.contains("gallery__image")) {
  //   return;
  // }
}
