import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery-container')
const loader = document.querySelector('.loader')
const lightbox = new SimpleLightbox(".gallery-container a" , { 
            captions: true,
            captionsData: 'alt',
            captionDelay: 250
});

export function createGallery(data) { 
    const galleryMarkup = data.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        { return`
        <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
          <div class="statictics">
            <div class = "statictics-text"><h3>Likes</h3><p> ${likes}</p></div>
            <div class = "statictics-text"><h3>Views</h3><p>${views}</p></div>
            <div class = "statictics-text"><h3>Comments</h3><p>${comments}</p></div>
            <div class = "statictics-text"><h3>Downloads</h3><p>${downloads}</p></div>
          </div>
        </a></li>`;
    }).join('');
  hideLoader( )
  gallery.insertAdjacentHTML('beforeend', galleryMarkup)

  lightbox.refresh()
  
}






export function clearGallery() {
  const clear = ''
  gallery.innerHTML = clear
}

export function showLoader() {
  loader.classList.remove('hidden')
}

export function hideLoader() {
  loader.classList.add('hidden')
}

