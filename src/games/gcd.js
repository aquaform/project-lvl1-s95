import startGame from '../index';

const desc = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const question = `${firstNumber} ${secondNumber}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const result = String(gcd(firstNumber, secondNumber));
  return [question, result];
};

export default () => startGame(generateQuestion, desc);
