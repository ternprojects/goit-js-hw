import dataImg from './gallery-items.js';
import { tempImg } from './template.js';

const galleryPosition = document.querySelector('.gallery');
const overlayState = document.querySelector('.lightbox');
const modalWindow = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('[data-action="close-lightbox"]');
const galleryPositionItems = dataImg.map(item => tempImg(item)).join('');

galleryPosition.insertAdjacentHTML('afterbegin', galleryPositionItems);
galleryPosition.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
overlayState.addEventListener('click', clickPastModal);

function showModal(e) {
  e.preventDefault();
  window.addEventListener('keydown', escapeModal);
  window.addEventListener('keydown', moveImg);

  if (e.target !== e.currentTarget) {
    const { source } = e.target.dataset;
    overlayState.classList.add('is-open');
    modalWindow.src = source;
    modalWindow.alt = e.target.description;
  }
}

function closeModal() {
  window.removeEventListener('keydown', escapeModal);
  window.removeEventListener('keydown', moveImg);

  overlayState.classList.remove('is-open');
  modalWindow.src = undefined;
  modalWindow.alt = undefined;
}

function clickPastModal(e) {
  if (e.target.nodeName !== 'IMG') {
    closeModal();
  }
}

function escapeModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function moveImg(e) {
  let selectedValue;

  if (modalWindow.src !== e.target.href) {
    const currentImage = modalWindow.src;
    selectedValue = dataImg.findIndex(
      item => item.original === currentImage,
    );
  } else {
    const imageToFind = e.target.href;
    selectedValue = dataImg.findIndex(
      item => item.original === imageToFind,
    );
  }

  if (e.code === 'ArrowRight') {
    modalWindow.src = dataImg[selectedValue + 1].original;
    modalWindow.alt = dataImg[selectedValue + 1].description;
  } else if (e.code === 'ArrowLeft') {
    modalWindow.src = dataImg[selectedValue - 1].original;
    modalWindow.alt = dataImg[selectedValue - 1].description;
  } else {
    return;
  }
}