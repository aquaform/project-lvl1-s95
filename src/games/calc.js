import startGame from '../index';
import getRandomNumber from '../utils';

const desc = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateQuestion = () => {
  const operation = operations[getRandomNumber(1, 3)];
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  let result;
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
  }
  const question = String(firstNumber) + operation + secondNumber;
  return [question, String(result)];
};

export default () => startGame(generateQuestion, desc);
