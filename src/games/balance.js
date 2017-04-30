import startGame from '../index';
import getRandomNumber from '../utils';

const desc = 'Balance the given number.';

const toDigits = (number, arr) => {
  const newArr = arr;
  if (Math.floor(number / 10) === 0) {
    newArr.unshift(number);
    return newArr;
  }
  newArr.unshift(Math.floor(number % 10));
  return toDigits(Math.floor(number / 10), newArr);
};

const balance = (arr) => {
  const newArr = arr;
  newArr.sort();
  if ((newArr[newArr.length - 1] - newArr[0]) > 1) {
    newArr[0] += 1;
    newArr[newArr.length - 1] -= 1;
    return balance(newArr);
  }
  return newArr;
};

const generateQuestion = () => {
  const randomNumber = getRandomNumber(10, 9999);
  const digits = toDigits(randomNumber, []);
  return [randomNumber, balance(digits).join('')];
};

export default () => startGame(generateQuestion, desc);
