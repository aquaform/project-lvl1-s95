import startGame from '../index';
import getRandomNumber from '../utils';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => {
  const question = getRandomNumber(0, 100);
  const result = (question % 2) === 0 ? 'yes' : 'no';
  return [question, result];
};

export default () => startGame(generateQuestion, desc);
