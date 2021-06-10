//Функция, возвращающая случайное целое число из переданного диапозона включительно
//имя_функции(от, до); // Результат: целое число из диапазона "от...до"
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max>min) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return ('Введите корректное значение');
}
getRandomIntInclusive(0,100);
//Функцию сам придумать не смог, поэтому взял из статьи с MDN. Вот ссылка - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Функция для проверки максимальной длины строки
//имя_функции(проверяемая_строка, максимальная_длина);
function checkLineLength (str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
}
checkLineLength('HTML', 8);
//Эту функцию написал сам.
