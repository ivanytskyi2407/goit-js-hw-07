import { galleryItems } from './gallery-items.js';

const markup = galleryItems.map(({ preview, original, description }) => {
       return `
        <div class="gallery__item">
    <a class="gallery__link" source="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`
    }).join('');
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend',markup);

gallery.addEventListener('click', onPictureClick);
let imgOnModal = '';
function onPictureClick(evt) {
    if (evt.target.nodeName !== "IMG") {
    return;
  }
  imgOnModal = basicLightbox.create(`<img src=${evt.target.dataset.source}>`);
  imgOnModal.show(); 
}
window.addEventListener('keydown',closeModal);
function closeModal(evt) { 
    if (evt.key === 'Escape') { 
      imgOnModal.close();
  }
        window.removeEventListener('click', onPictureClick);
  
}