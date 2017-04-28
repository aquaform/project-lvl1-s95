import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return `${userName}`;
};

const startCountCorrect = 0;
const endCountCorrect = 3;

export default (generateQuestion, descGame = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(descGame);
  const userName = askUserName();

  if (!generateQuestion) return false;

  const startRound = (countCorrect) => {
    if (countCorrect === endCountCorrect) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const question = generateQuestion();
    console.log(`Question: ${question[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === question[1]) {
      console.log('Correct!');
      return startRound(countCorrect + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'.`);
    return false;
  };

  return startRound(startCountCorrect);
};
