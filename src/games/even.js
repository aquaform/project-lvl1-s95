import readlineSync from 'readline-sync';

export const desc = 'Answer "yes" if number even otherwise answer "no".';

export const generateQuestion = () => [Math.floor(Math.random() * 100)];

export const getCorrectAnswer = (question) => {
  const result = (question % 2) === 0 ? 'yes' : 'no';
  return result;
};
