function renderPictures(data){
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  const pictureBlock = document.querySelector('.pictures');

  data.forEach((item) => {
    const photo = pictureTemplate.cloneNode(true);
    photo.querySelector('.picture__img').src = item.url;
    photo.querySelector('.picture__img').alt = item.description;
    photo.querySelector('.picture__comments').textContent = item.comments.length;
    photo.querySelector('.picture__likes').textContent = item.likes;

    fragment.appendChild(photo);
  });

  pictureBlock.appendChild(fragment);
}

export{renderPictures};
