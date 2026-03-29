import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

const galleryEl = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img 
      class="gallery-image" 
      src="${webformatURL}" 
      alt="${tags}" 
    />
  </a>
  <div class="info">
    <p><b>Likes</b> ${likes}</p>
    <p><b>Views</b> ${views}</p>
    <p><b>Comments</b> ${comments}</p>
    <p><b>Downloads</b> ${downloads}</p>
  </div>
</li>`;
      }
    )
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);

  gallery.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = "";
}

export function showLoader() {
  loader.classList.add("active");
}

export function hideLoader() {
  loader.classList.remove("active");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("hidden");
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("hidden");
}