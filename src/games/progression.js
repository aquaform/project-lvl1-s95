import startGame from '../index';

const desc = 'What number is missing in this progression?';
const countProgression = 10;
const maxStep = 10;

const generateQuestion = () => {
  const startProgression = Math.floor(Math.random() * 100);
  const stepProgression = Math.floor(1 + (Math.random() * maxStep));
  const indexOfHiddenElement = Math.floor(Math.random() * countProgression);

  const generateProgression = (current, index, arr) => {
    const newArr = arr;
    if (index === countProgression) {
      newArr.push(current + stepProgression);
      return newArr;
    }
    const newElement = current + stepProgression;
    newArr.push(newElement);
    return generateProgression(newElement, index + 1, newArr);
  };

  const progression = generateProgression(startProgression, 1, []);
  const correctAnswer = String(progression[indexOfHiddenElement - 1]);
  progression[indexOfHiddenElement - 1] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => startGame(generateQuestion, desc);
