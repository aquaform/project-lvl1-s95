import readlineSync from 'readline-sync';
import * as evenGame from './games/even';
import * as calcGame from './games/calc';


const askUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return `${userName}`;
};

export default (typeOfGame) => {
  console.log('Welcome to the Brain Games!');
  let generateQuestion;
  let descGame;
  let getCorrectAnswer;
  switch (typeOfGame) {
    case ('even'): {
      descGame = evenGame.desc;
      generateQuestion = evenGame.generateQuestion;
      getCorrectAnswer = evenGame.getCorrectAnswer;
      break;
    }
    case ('calc'): {
      descGame = calcGame.desc;
      generateQuestion = calcGame.generateQuestion;
      getCorrectAnswer = calcGame.getCorrectAnswer;
      break;
    }
    default:
  }
  if (typeOfGame) console.log(descGame);
  const userName = askUserName();

  const startRound = (countCorrect) => {
    if (countCorrect === 3) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const question = generateQuestion();
    console.log(`Question: ${question[0]}`);
    const correctAnswer = getCorrectAnswer(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      return startRound(countCorrect + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };
  const startCountCorrect = 0;
  if (typeOfGame) startRound(startCountCorrect);
};
