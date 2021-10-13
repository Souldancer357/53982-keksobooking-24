/** Функция, возвращающая случайное целое число из переданного диапазона включительно.
* Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#получение_случайного_целого_числа_в_заданном_интервале_включительно
* @param max {number} - Максимальное значение из диапазона.
* @param min {number} - Минимальное значение из диапазона.
* @return {number}    - Возвращает -1, если входные параметры не верны.
**/

function getRandomIntInclusive(min, max) {
  if (min === undefined || max === undefined) {
    console.log('Не указано значение "От" или "До". Либо не указаны оба значения.');
    return -1;
  }

  if (min < 0 || max < 0) {
    console.log('Одно из значений отрицательное. Либо оба значения отрицательные.');
    return -1;
  }

  if (min >= max) {
    console.log('Значение "До" не может быть меньше или равно значению "От"');
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
    console.log('Не указано значение "От" или "До". Либо не указаны оба значения.');
    return -1;
  }

  if (min < 0 || max < 0) {
    console.log('Одно из значений отрицательное. Либо оба значения отрицательные.');
    return -1;
  }

  if (min >= max) {
    console.log('Значение "До" не может быть меньше или равно значению "От"');
    return -1;
  }

  const randomFractionalNumber =  Math.random() * (max - min) + min;
  return randomFractionalNumber.toFixed(numbeOfSigns);
}

const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLES = [
  'Уютная комната возле метро!',
  'Отличное предложение около главной площади города!',
  'Супер светлая квартира в центре',
  'Уникальное предложение! Отдельная комната',
  'Квартира у речного вокзала',
  'Милая комната возле парка',
  'Квартира кота Барбариса!',
  'Квартира возле моста',
  'Квартира на гастро улице',
  'Уютная, светлая комната',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow или hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Квартира располагается на 17 этаже нового дома с шикарным панорамным видом на город! Солнечная и светлая, с множеством искусственного освещения для создания приятной атмосферы вечером.',
  'Однокомнатная, уютная квартира после косметического ремонта, есть все для комфортного проживания, комната 24 квадратных метра разделена на две комнаты',
  'Светлая, уютная студии в самом центре города, оборудованная всем необходимым для проживания на любой срок. В студии есть собственная кухня и ванная комната.',
  'Здесь хорошо! Маленькая уютная комната с мягким диваном, шкафом для ваших вещей, креслом и большущим окном с приятным видом)',
  'Милая небольшая студия на цокольном этаже. Если выйти из двора вашему взору откроется чудесный вид на главную улицу города',
  'Спокойное жилье для расслабленного семейного отдыха. Прекрасный вид с панорамной лоджии.',
  'Стильное жилье в историческом центре расположено в аутентичном, но просторном закрытом дворике с видом на сквер.',
  'Уютная квартира в старом здании на берегу реки. Очень близко до основных достопримечательностей.',
  'Ваш дом ручной работы, наполненный всем необходимым и другими приятными мелочами, чтобы сделать Ваше пребывание беззаботным и незабываемым.',
  'Однокомнатная квартира, которая располагается в новом благоустроенном районе. Район находится рядом с центром города',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

/**
* Функция, возвращающая массив случайной длины из значений wifi, dishwasher, parking, washer, elevator, conditioner.
* @return {object}             - Массив случайной длины из значений.
**/

function getRandomArrayFromFeatures() {
  const randomLengthOfFeatures = getRandomIntInclusive(1, FEATURES.length);
  const arrayOfIndexes = [];

  while (arrayOfIndexes.length < randomLengthOfFeatures) {
    const randomIndex = getRandomIntInclusive(0, FEATURES.length - 1);
    if (!arrayOfIndexes.includes(randomIndex)) {
      arrayOfIndexes.push(randomIndex);
    }
  }

  const randomArrayFromFeatures = arrayOfIndexes.map((value) => FEATURES[value]);
  return randomArrayFromFeatures;
}

/**
* Функция, возвращающая массив случайной длины из значений:
* https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
* https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg,
* https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
* @return {object}             - Массив случайной длины из значений.
**/

function getRandomArrayFromPhotos() {
  const randomLengthOfPhotos = getRandomIntInclusive(1, PHOTOS.length);
  const arrayOfIndexes = [];

  while (arrayOfIndexes.length < randomLengthOfPhotos) {
    const randomIndex = getRandomIntInclusive(0, PHOTOS.length - 1);
    if (!arrayOfIndexes.includes(randomIndex)) {
      arrayOfIndexes.push(randomIndex);
    }
  }

  const randomArrayFromPhotos = arrayOfIndexes.map((value) => PHOTOS[value]);
  return randomArrayFromPhotos;
}

/**
* Функция, возвращающая cлучайный элемент в переданном массиве.
* @return {string}             - Возвращает cлучайный элемент в переданном массиве.
**/
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createOffer = () => ({
  author: {
    avatar: 'img/avatars/user' + getRandomArrayElement(AVATARS) + '.png',
  },

  offer: {
    title: getRandomArrayElement(TITLES),
    address: location.lat + ', ' + location.lng,
    price: getRandomIntInclusive(1, 6000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomIntInclusive(1, 5),
    guests: getRandomIntInclusive(1, 6),
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKOUTS),
    features: getRandomArrayFromFeatures(),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: getRandomArrayFromPhotos(PHOTOS),
  },

  location: {
    lat: getRandomFractional(35.65000, 35.70000, 5),
    lng: getRandomFractional(139.70000, 139.80000, 5),
  },
});

const similarOffers = Array.from({length: 10}, createOffer);

console.log(similarOffers);

