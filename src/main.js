import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { searchImagesProcess } from "./js/pixabay-api.js";
import { createGallery, clearGallery } from "./js/render-functions.js";
const form = document.querySelector('.form');
const input = document.querySelector('.form-input')



form.addEventListener('submit', handleSearchImages)

function handleSearchImages(event) {
  event.preventDefault()
  const inputValue = event.currentTarget.input.value.trim();
  if (inputValue === '') {
     iziToast.error({
          message:
            'Please enter your search query.',
          position: 'topRight',
     });
    return clearGallery()
    
  } 
  
  searchImagesProcess(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
      iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      clearGallery()
      createGallery(data.hits)
    }).catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    }) .finally(() => {
      input.value = '';
    });
}

