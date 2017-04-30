import readlineSync from 'readline-sync';

const startCountCorrect = 0;
const endCountCorrect = 3;

const startRound = (countCorrect, generateQuestion, userName) => {
  if (countCorrect === endCountCorrect) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  const [question, correctAnswer] = generateQuestion();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return startRound(countCorrect + 1, generateQuestion, userName);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default (generateQuestion, descGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(descGame);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return startRound(startCountCorrect, generateQuestion, userName);
};
