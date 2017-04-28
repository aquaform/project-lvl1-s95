import startGame from '../index';

const desc = 'What is the result of the expression?';

const generateQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * 3)];
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
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
  return [question, result];
};

export default () => startGame(generateQuestion, desc);
