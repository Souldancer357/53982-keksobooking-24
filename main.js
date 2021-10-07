// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно

function getRandomIntInclusive(min, max) {
  if (min !== undefined && max !== undefined) {
    if (min >= 0 && max >= 0) {
      if (max > min) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
      } else {
        console.log('Значение "До" не может быть меньше или равно значению "От"');
      }
    } else {
      console.log('Одно из значений отрицательное. Либо оба значения отрицательные.');
    }
  } else {
    console.log('Не указано значение "От" или "До". Либо не указаны оба значения.');
  }
}

console.log(getRandomIntInclusive(3, 5));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFractional(min, max, numbeOfSigns) {
  if (min !== undefined && max !== undefined) {
    if (min >= 0 && max >= 0) {
      if (max > min) {
        const randomFractionalNumber =  Math.random() * (max - min) + min; //Максимум и минимум включаются
        return randomFractionalNumber.toFixed(numbeOfSigns);
      } else {
        console.log('Значение "До" не может быть меньше или равно значению "От"');
      }
    } else {
      console.log('Значение "От" или "До" отрицательное. Либо оба значения отрицательные.');
    }
  } else {
    console.log('Не указано значение "От" или "До". Либо не указаны оба значения.');
  }
}

console.log(getRandomFractional(3, 5, 3));
