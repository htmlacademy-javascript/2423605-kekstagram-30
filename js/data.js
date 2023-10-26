import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js'

const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const MAX_AVATAR = 6;
const MAX_PICTURES = 25;

const SOME_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SOME_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPTIONS = [
  'В целом всё неплохо. Но не всё.',
  'Cool',
  'Круто #отрыв',
  'Урррра отпуск',
  'После сытного обеда, по закону Архимеда...',
  'Шла Саша по шоссе...',
];



const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(SOME_COMMENTS),
).join(' ');

const createComment = () => ({
  id : generateCommentId(),
  avatar : `img/avatar-${getRandomInteger(1, MAX_AVATAR)}.svg`,
  message : createMessage(),
  name : getRandomArrayElement(SOME_NAMES),
});

const generatePictureId = createIdGenerator();

const createPicture = () => {
  const pictureId = generatePictureId();
  const picture = {
    id : pictureId,
    url : `photos/${pictureId}.jpg`,
    description : getRandomArrayElement(DESCRIPTIONS),
    likes : getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments : Array.from(
      {length : getRandomInteger(0,MAX_COMMENTS)},
      createComment),
  };
  return picture;
};

const createData = () => Array.from(
  {length : MAX_PICTURES },
  createPicture);

export {createData};
