import startGame from '../index';

const desc = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  return [`${firstNumber} ${secondNumber}`, firstNumber, secondNumber];
};

const getCorrectAnswer = (question) => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  return String(gcd(question[1], question[2]));
};

export default () => startGame(desc, generateQuestion, getCorrectAnswer);
