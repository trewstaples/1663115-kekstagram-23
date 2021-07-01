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
getRandomPositiveInteger();

export { getRandomPositiveInteger };
