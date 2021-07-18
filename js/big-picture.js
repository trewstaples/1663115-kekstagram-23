//module7-task2

const bigPicture = document.querySelector('.big-picture');
//Шаг 1, 5 - Написать функцию для открытия/закрытия окна с полноэкрамным изображением. Удаление/добавление элементов.
const openBigPictureModal = function () {
  const bigPictureCancelButton = document.querySelector('.big-picture__cancel');
  bigPicture.classList.remove('hidden');
  //Код для закрытия окна по нажатию клавиши Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
  //Код для закрытия окна по нажатию иконки закрытия
  bigPictureCancelButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });

  //Шаг 3 - Спрятать блоки счетчики и загрузки комментариев
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  //Шаг 4 - добавить класс тегу body и убрать его при закрытии(см.шаг5)
  document.querySelector('body').classList.add('modal-open');
};

export { openBigPictureModal };
export { bigPicture };
