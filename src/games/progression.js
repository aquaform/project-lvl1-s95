import startGame from '../index';
import getRandomNumber from '../utils';

const desc = 'What number is missing in this progression?';
const countProgression = 10;
const maxStep = 10;

const generateProgression = (current, index, step, arr) => {
  const newArr = arr;
  if (index === countProgression) {
    newArr.push(current + step);
    return newArr;
  }
  const newElement = current + step;
  newArr.push(newElement);
  return generateProgression(newElement, index + 1, step, newArr);
};


const generateQuestion = () => {
  const startProgression = getRandomNumber(0, 100);
  const stepProgression = getRandomNumber(1, maxStep);
  const indexOfHiddenElement = getRandomNumber(1, countProgression);

  const progression = generateProgression(startProgression, 1, stepProgression, []);
  const correctAnswer = String(progression[indexOfHiddenElement - 1]);
  progression[indexOfHiddenElement - 1] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(generateQuestion, desc);
