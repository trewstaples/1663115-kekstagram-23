//Функция, возвращающая случайное целое число из переданного диапозона включительно
//имя_функции(от, до); // Результат: целое число из диапазона "от...до"
function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength (1,3);
//Решил оставить функцию из файла check-string от академии, так как там есть объяснение )))

//Функция для проверки максимальной длины строки
//имя_функции(проверяемая_строка, максимальная_длина);
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger(1,100);
//Эту функцию написал сам
