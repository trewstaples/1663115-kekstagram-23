//moudule8-task1
const uploadForm = document.querySelector('.img-upload__form');
uploadForm;
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelButton = uploadForm.querySelector('#upload-cancel');

//Написать открываюший и закрывающий форму код редактирования изображеня при загрузке
uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

const textHashtags = uploadForm.querySelector('.text__hashtags');
// document.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Escape' || evt.key === 'Esc') {
//     evt.preventDefault();
//     uploadOverlay.classList.add('hidden');
//     document.querySelector('body').classList.remove('modal-open');
//   }
// });

const openUploadEsc = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    uploadOverlay.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
};

function openUserModal() {
  document.addEventListener('keydown', openUploadEsc);
}
openUserModal();

function closeUserModal() {
  document.removeEventListener('keydown', openUploadEsc);
}

uploadCancelButton.addEventListener('click', () => {
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
//Требования валидации для хэштегов и комментариев с помощью регулярных выражений
const hashtagLimit = /^#[A-Za-zА-Яа-я0-9]{1,19}\S$/;
const COMMENTS_MAX_LENGTH = 140;

//Обработчик событий для валидирования хэштегов
textHashtags.addEventListener('input', () => {
  const currentHashtags = textHashtags.value.split(' ', 5);
  const setHashtags = new Set(currentHashtags);

  const curElement = document.activeElement;
  if (curElement !== currentHashtags) {
    closeUserModal();
  }

  currentHashtags.forEach((hashtag) => {
    hashtag = hashtag.toLowerCase();
    if (hashtagLimit.test(hashtag) === false) {
      textHashtags.setCustomValidity(`
         1. ${'Хэш-тег начинается с символа # (решётка)'}
         2. ${'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы(#, @, $ и т. п.)'}
         3. ${'Строка не должна содержать символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.'}
         4. ${'Хеш-тег не может состоять только из одной решётки'}
         5. ${'Максимальная длина одного хэш-тега 20 символов, включая решётку'}
         `);
    } else if (currentHashtags.length !== [...setHashtags].length) {
      textHashtags.setCustomValidity(`${'Один и тот же хэштег не может быть использован дважды'}`);
    } else {
      textHashtags.setCustomValidity('');
    }
  });
});

// Добавить обработчик событий для валидирования комментариев
const textComments = uploadForm.querySelector('.text__description');
textComments.addEventListener('input', (evt) => {
  const curElement = document.activeElement;
  if (curElement === textComments) {
    closeUserModal();
  }
  if (evt.target.value.length > COMMENTS_MAX_LENGTH) {
    textComments.setCustomValidity(`${'Максимальная длина комментариев = 147 символов'} `);
  } else {
    textComments.setCustomValidity('');
  }
});
