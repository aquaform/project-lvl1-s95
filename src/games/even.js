import startGame from '../index';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  const result = (question % 2) === 0 ? 'yes' : 'no';
  return [question, result];
};

export default () => startGame(generateQuestion, desc);
