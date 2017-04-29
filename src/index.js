import readlineSync from 'readline-sync';

const startCountCorrect = 0;
const endCountCorrect = 3;

export default (generateQuestion, descGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(descGame);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const startRound = (countCorrect) => {
    if (countCorrect === endCountCorrect) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      return startRound(countCorrect + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  return startRound(startCountCorrect);
};
