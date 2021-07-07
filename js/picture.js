//Импортировали данные массива
import { photos } from './data.js';
photos;

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
  picturesFragment.appendChild(newPicture);
});

//Записываем фрагмент фотографий в список
picturesList.appendChild(picturesFragment);
