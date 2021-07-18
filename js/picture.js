//Импортировали данные массива
import { photos } from './data.js';
import { openBigPictureModal } from './big-picture.js';
import { bigPicture } from './big-picture.js';

//Объявили переменные списка фотографий и шаблона
const picturesList = document.querySelector('.pictures');
picturesList;
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
picturesTemplate;
const picturesFragment = document.createDocumentFragment();

//Для каждого элемента массива photos добавляем шаблон фотографии и сохраняем их в фрагмент
photos.forEach((photo) => {
  const newPicture = picturesTemplate.cloneNode(true);
  newPicture.querySelector('.picture__img').src = photo.url;
  newPicture.querySelector('.picture__likes').textContent = photo.likes;
  newPicture.querySelector('.picture__comments').textContent = photo.comments.length;

  //Добавить значения массива комментариев в блок social-coments
  const commentsTemplate = document
    .querySelector('#comment_template')
    .content.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();

  //Добавить обработчик событий по клику для отрисовки полноэкранного изображения
  newPicture.addEventListener('click', () => {
    //Добавить описание фото
    bigPicture.querySelector('.big-picture_full_img').src = photo.url;
    bigPicture.querySelector('.likes-count').textContent = photo.likes;
    bigPicture.querySelector('.comments-count').textContent = photo.length;
    bigPicture.querySelector('.social__caption').textContent = photo.description;

    const socialCommentsList = bigPicture.querySelector('.social__comments');
    socialCommentsList.innerHTML = '';

    //Добавим переменные блока комментариев полноразмерной фотографии
    photo.comments.forEach((comment) => {
      const newComment = commentsTemplate.cloneNode(true);
      newComment.querySelector('.social__picture').src = comment.avatar;
      newComment.querySelector('.social__picture').alt = comment.name;
      newComment.querySelector('.social__text').textContent = comment.message;
      commentFragment.appendChild(newComment);
    });
    openBigPictureModal(photo);
    socialCommentsList.appendChild(commentFragment);
  });

  picturesFragment.appendChild(newPicture);
});
//Записываем фрагмент фотографий в список
picturesList.appendChild(picturesFragment);
