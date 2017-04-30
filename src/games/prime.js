import startGame from '../index';
import getRandomNumber from '../utils';

const desc = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (current, number) => {
  if (number % current === 0 && current !== number) {
    return false;
  } else if (current === number) {
    return true;
  }
  return isPrime(current + 1, number);
};

const generateQuestion = () => {
  const question = getRandomNumber(2, 999);
  console.log(question);
  const result = isPrime(2, question) ? 'yes' : 'no';
  return [String(question), result];
};

export default () => startGame(generateQuestion, desc);
