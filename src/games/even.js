import readlineSync from 'readline-sync';

export default (userName) => {
  const generateQuestion = () => Math.floor(Math.random() * 100);

  const getCorrectAnswer = (question) => {
    const result = (question % 2) === 0 ? 'yes' : 'no';
    return result;
  };

  const startRound = (countCorrect) => {
    if (countCorrect === 3) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const question = generateQuestion();
    console.log(`Question: ${question}`);
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
  return startRound(startCountCorrect);
};
