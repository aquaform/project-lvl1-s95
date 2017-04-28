import startGame from '../index';

const desc = 'What is the result of the expression?';

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * 3)];
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  return [String(firstNumber) + operation + secondNumber, operation, firstNumber, secondNumber];
};

const getCorrectAnswer = (question) => {
  let result;
  switch (question[1]) {
    case '+':
      result = question[2] + question[3];
      break;
    case '-':
      result = question[2] - question[3];
      break;
    case '*':
      result = question[2] * question[3];
      break;
    default:
  }
  return String(result);
};

export default () => startGame(desc, generateQuestion, getCorrectAnswer);
