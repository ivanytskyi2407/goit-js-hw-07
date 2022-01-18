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
let imgColector = "";
gallery.addEventListener('click', onPictureClick);




// document.querySelector('.gallery__image').onclick = () => {

// 	basicLightbox.create(`
// 		<iframe width="560" height="315" src="https://www.youtube.com/embed/Scxs7L0vhZ4" frameborder="0" allowfullscreen></iframe>
// 	`).show()

// }
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// є

// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.


function onPictureClick(evt) {
    if (evt.target.nodeName !== "IMG") {
    return;
  }
    imgColector = basicLightbox.create(`<img src=${evt.target.dataset.source}>`).show();
}

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.