import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", handleSubmit);
loadMoreBtn.addEventListener("click", handleLoadMore);

async function handleSubmit(e) {
  e.preventDefault();

  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  currentQuery = query;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
        iziToast.error({
        message:"Sorry, there are no images matching your search query. Please try again!",
        });
    return;
    }

      createGallery(data.hits);
      
if (page * 15 < totalHits) {
    showLoadMoreButton();
} else {
    hideLoadMoreButton();

    iziToast.info({
    message: "We're sorry, but you've reached the end of search results.",
    });
}
    } catch (error) {
    iziToast.error({
    message: "Error loading more images",
    });
} finally {
hideLoader();
    }
}

async function handleLoadMore() {
    page += 1;
    
    hideLoadMoreButton();
    showLoader();

try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const card = document
    .querySelector(".gallery-item")
    .getBoundingClientRect();

    window.scrollBy({
    top: card.height * 2,
    behavior: "smooth",
});


if (page * 15 < totalHits) {
    showLoadMoreButton();
} else {
    hideLoadMoreButton();

iziToast.info({
message: "We're sorry, but you've reached the end of search results.",
});
}
} catch (error) {
iziToast.error({
    message: "Error loading more images",
});
} finally {
hideLoader();
 }
}