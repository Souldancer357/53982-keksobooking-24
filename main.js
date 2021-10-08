/** Функция, возвращающая случайное целое число из переданного диапазона включительно.
* Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно
* @param max (number) - Максимальное значение из диапазона.
* @param min (number) - Минимальное значение из диапазона.
**/

function getRandomIntInclusive(min, max) {
  /**
  * @return -1 - Если в параметр min или max не был передан аргумент. Либо в оба параметра не были переданы аргументы.
  **/

  if (min === undefined || max === undefined) {
    console.log('Не указано значение "От" или "До". Либо не указаны оба значения.');
    return -1;
  }

  /**
  * @return -1 - Если параметр min или max содержит отрицательное значение. Либо оба параметра содержат отрицательные значения.
  **/

  if (min < 0 || max < 0) {
    console.log('Одно из значений отрицательное. Либо оба значения отрицательные.');
    return -1;
  }

  /**
  * @return -1 - Если параметр min больше или равен параметру max.
  **/

  if (min >= max) {
    console.log('Значение "До" не может быть меньше или равно значению "От"');
    return -1;
  }

  /**
  * @return (number) - Возвращает случайное целое число из переданного диапазона включительно.
  **/

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

console.log(getRandomIntInclusive(3, 5));

/**
* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона.
* @param max          (number) - Максимальное значение из диапазона.
* @param min          (number) - Минимальное значение из диапазона.
* @param numbeOfSigns (number) - Необязательный параметр. Количество цифр после десятичной
*                                запятой; может быть значением между 0 и 20 включительно, хотя
*                                реализации могут поддерживать и больший диапазон значений.
*                                Если аргумент опущен, он считается равным 0.
**/

function getRandomFractional(min, max, numbeOfSigns) {
  /**
  * @return -1 - Если в параметр min или max не был передан аргумент. Либо в оба параметра не были переданы аргументы.
  **/

  if (min === undefined || max === undefined) {
    console.log('Не указано значение "От" или "До". Либо не указаны оба значения.');
    return -1;
  }

  /**
  * @return -1 - Если параметр min или max содержит отрицательное значение. Либо оба параметра содержат отрицательные значения.
  **/

  if (min < 0 || max < 0) {
    console.log('Одно из значений отрицательное. Либо оба значения отрицательные.');
    return -1;
  }

  /**
  * @return -1 - Если параметр min больше или равен параметру max.
  **/

  if (min >= max) {
    console.log('Значение "До" не может быть меньше или равно значению "От"');
    return -1;
  }

  /**
  * @return    (number) - Возвращает случайное число с плавающей точкой из диапазона с указанным количеством знаков после запятой.
  **/

  const randomFractionalNumber =  Math.random() * (max - min) + min;
  return randomFractionalNumber.toFixed(numbeOfSigns);
}

console.log(getRandomFractional(3, 5, 3));
