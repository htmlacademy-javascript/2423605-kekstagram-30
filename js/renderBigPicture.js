import {isEscapeKey} from './util.js';
import {createComments} from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureAllComments = bigPicture.querySelector('.social__comment-total-count');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

bigPictureCloseButton.addEventListener('click', () => {
  closeBigPicture();
});

const onPictureKeydown = (evt) => {
  if(isEscapeKey(evt)){
    closeBigPicture();
  }
};

function closeBigPicture(){
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureKeydown);
}

function openBigPicture(){
  document.addEventListener('keydown', onPictureKeydown);
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function onClickPicture({url, description, likes, comments}){
  openBigPicture();
  bigPictureImg.src = url;
  bigPictureDescription.textContent = description;
  bigPictureLikes.textContent = likes;
  bigPictureAllComments.textContent = comments.length;
  createComments(comments);

}

export {onClickPicture};
