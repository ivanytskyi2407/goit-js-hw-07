import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend',createGallery());
function createGallery() {  
   return galleryItems.map(({ preview, original, description }) => {
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
}

// Реалізація делегування на div.gallery і отримання url великого зображення.
gallery.addEventListener('click', onPictureClick);

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// є

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

function onPictureClick(evt) {
    if (evt.target.nodeName !== "IMG") {
    return;
  }
    return basicLightbox.create(`<img src=${evt.target.dataset.source}>`).show();
}

gallery.addEventListener('keydown',closeModal);

function closeModal(evt) {
    
    if (evt.key === 'Escape') { 
        console.log(evt.key);
        // gallery.removeEventListener('click', onPictureClick);
    }
}

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.