//Функция для проверки максимальной длины строки
function checkStringLength(string, length) {
  return string.length <= length;
}
checkStringLength(1, 3);

//Функция для расчёта случайного числа из переданного диапозона
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const DESCRIPTIONS = [
  'Отпуск в Тайланде',
  'Уральские горы',
  'Речка в долине',
  'Чемпионат по футболу',
  'В музее',
  'В кино',
  'Закат',
  'Утренняя тренировка',
  'Обед по расписанию',
  'Ужин в ресторане',
  'Катаюсь на сноуборде',
  'Делаю проект',
  'Учусь в HTML-Academy',
  'Кормлю Кекса',
  'Гуляю с Кексом',
  'Ныряю с аквалангом',
  'Гуляю по ночному городу',
  'Птицы летят',
  'Собака плывет',
  'Дети смеются',
  'Purpose.Accountability.Imagination',
  'Sport is movement',
  'Первый раз в первый класс',
  'Выпускной',
  'Прогулка на яхте',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Андрей', 'Василий', 'Петр', 'Иван', 'Мария', 'Анна', 'Елена', 'Надежда'];

//Записать число фотографий в переменную
const PHOTO_COUNT = 25;

//Написать функцию, создающую объект одного комментария c ключами id, avatar, message, name
const getOneComment = (index) => ({
  id: getRandomPositiveInteger(1, 20),
  // eslint-disable-next-line quotes
  avatar: `img/avatar-$(index+1).svg`,
  message: MESSAGES[index],
  name: NAMES[index],
});

//Создать массив комментариев с помощью функции
const createComments = function () {
  const photoComments = new Array(getRandomPositiveInteger(1, 10))
    .fill(null)
    .map((el, index) => getOneComment(index));
  return photoComments;
};

//Написать функцию, которая создает объект c ключами: id, url, description, likes, comments
const getPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index],
  likes: getRandomPositiveInteger(15, 200),
  comments: createComments(),
});

//Создать массив с 25 элементами
const photos = new Array(PHOTO_COUNT).fill(null).map((el, index) => getPhoto(index));
