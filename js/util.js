/** Функция, возвращающая случайное целое число из переданного диапазона включительно.
* Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно
* @param max {number} - Максимальное значение из диапазона.
* @param min {number} - Минимальное значение из диапазона.
* @return {number}    - Возвращает -1, если входные параметры не верны.
**/

function getRandomIntInclusive(min, max) {
  if (min === undefined || max === undefined) {
    return -1;
  }

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min >= max) {
    return -1;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона с указанным количеством знаков после запятой.
* @param max          {number} - Максимальное значение из диапазона.
* @param min          {number} - Минимальное значение из диапазона.
* @param numbeOfSigns {number} - Необязательный параметр. Количество цифр после десятичной запятой.
* @return {number}             - Возвращает -1, если входные параметры не верны.
**/

function getRandomFractional(min, max, numbeOfSigns) {

  if (min === undefined || max === undefined) {
    return -1;
  }

  if (min < 0 || max < 0) {
    return -1;
  }

  if (min >= max) {
    return -1;
  }

  const randomFractionalNumber =  Math.random() * (max - min) + min;
  return randomFractionalNumber.toFixed(numbeOfSigns);
}

export {getRandomIntInclusive, getRandomFractional};
