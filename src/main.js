import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchImagesProcess } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
const form = document.querySelector('.form');
form.addEventListener('submit', handleSearchImages)

function handleSearchImages(event) {
  event.preventDefault()
  showLoader()
  clearGallery()
  const inputQuery = event.currentTarget.input.value.trim();
  if (inputQuery === '') {
    iziToast.error({
          message:
            'Please enter your search query.',
          position: 'topRight',
    });
    return hideLoader()
    } 
  
  searchImagesProcess(inputQuery)
    .then(data => {
      if (data.hits.length === 0) {
      iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
      });
      }
      createGallery(data.hits)
    }).catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    }) .finally(() => {
      form.reset()
    });
}

