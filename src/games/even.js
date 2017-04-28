import startGame from '../index';

const desc = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => [Math.floor(Math.random() * 100)];

const getCorrectAnswer = (question) => {
  const result = (question % 2) === 0 ? 'yes' : 'no';
  return result;
};

export default () => startGame(desc, generateQuestion, getCorrectAnswer);
