import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './galary-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const createGalleryList = items =>
  items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
    )
    .join('');

const createGallery = createGalleryList(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', createGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
