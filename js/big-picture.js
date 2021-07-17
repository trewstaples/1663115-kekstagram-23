//module7-task2
//import { photos } from './data.js';
//import { picturesList } from './picture.js';

//Открыть окно полноэкрамного изображения
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancelButton = document.querySelector('.big-picture__cancel');

//Создадим массив из DOM-фоток
const pictures = document.querySelectorAll('.picture');
const picturesArray = Array.from(pictures);
picturesArray;

picturesArray.forEach((picture) => {
  addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img').src = picture.url;
  });
});
//Шаг 2 - Заполнить big-picture данными о фотографии - непонятно

/*

photos.forEach((photo) => {
  addEventListener('click', () => {

    bigPicture.querySelector('.big-picture__img').src = photo.children.url;
  });
});
picturesList.children.addEventListener('click', () => {

  bigPicture.querySelector('.likes-count').textContent = picturesList.children.likes;
  bigPicture.querySelector('.comments-count').textContent = picturesList.children.length;
  bigPicture.querySelector('.social__caption').textContent = picturesList.children.description;
});
//Добавление комментариев к фотографии
const socialComments = bigPicture.querySelector('.social__comments');
const newComment = socialComments.querySelector('.social__comment').cloneNode(true);
newComment.querySelector('.social__picture').src = photo.comments.photoComments.avatar - ??;
newComment.querySelector('.social__picture').alt = photo.comments.photoComments.name - ??;
newComment.querySelector('.social__text').textContent = photo.comments.photoComments.message - ??;
commentFragment.appendChild(newComment);
socialComments.appendChild(commentFragment);
*/

//Шаг 3 - Спрятать блоки счетчики и загрузки комментариев
bigPicture.querySelector('.social__comment-count').classList.add('hidden');
bigPicture.querySelector('.comments-loader').classList.add('hidden');

//Шаг 4 - добавить класс тегу body и убрать его при закрытии(см.шаг5)
document.querySelector('body').classList.add('modal-open');

//Шаг 5 - Написать код для закрытия окна по нажатию клавиши Esc или иконки закрытия
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

bigPictureCancelButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
/*
! Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением. - g

! Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.

Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
Описание фотографии description вставьте строкой в блок .social__caption.

! После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

! После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

! Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

! Подключите модуль в проект.


*/
