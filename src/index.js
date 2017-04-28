import readlineSync from 'readline-sync';

const askUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return `${userName}`;
};

export default (descGame, generateQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(descGame);
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
  startRound(startCountCorrect);
};
