

const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const fragment = document.createDocumentFragment();

function createComments(comments) {


  comments.forEach((element) => {
    const commentClone = commentElement.cloneNode(true);
    const {avatar, message, name} = element;
    commentClone.querySelector('.social__picture').src = avatar;
    commentClone.querySelector('.social__picture').alt = name;
    commentClone.querySelector('.social__text').textContent = message;
    fragment.appendChild(commentClone);

  }) ;
  commentsList.innerHTML = '';
  commentsList.append(fragment);

}

export {createComments};

