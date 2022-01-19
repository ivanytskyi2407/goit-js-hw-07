import { galleryItems } from './gallery-items.js';
const markup = galleryItems.map(({ preview, original, description }) => {
       return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
}).join('');
const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend',markup);
let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay:250,
});