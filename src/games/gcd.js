import startGame from '../index';
import getRandomNumber from '../utils';

const desc = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateQuestion = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const result = String(gcd(firstNumber, secondNumber));
  return [question, result];
};

export default () => startGame(generateQuestion, desc);
