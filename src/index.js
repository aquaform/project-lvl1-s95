import readlineSync from 'readline-sync';
import startEvenGame from './games/even';
import startCalcGame from './games/calc';

const gameDesc = {
  even: 'Answer "yes" if number even otherwise answer "no".\n',
  calc: 'What is the result of the expression?\n' };

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return `${userName}`;
};

export default (typeOfGame) => {
  console.log('Welcome to the Brain Games!');
  if (typeOfGame) console.log(gameDesc[typeOfGame]);
  const userName = askUserName();
  switch (typeOfGame) {
    case ('even'): {
      startEvenGame(userName);
      break;
    }
    case ('calc'): {
      startCalcGame(userName);
      break;
    }
    default:
  }
};
