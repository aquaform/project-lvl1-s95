import readlineSync from 'readline-sync';

export default (userName) => {
  const generateQuestion = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * 3)];
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    return [operation, firstNumber, secondNumber];
  };

  const getCorrectAnswer = (question) => {
    let result;
    switch (question[0]) {
      case '+':
        result = question[1] + question[2];
        break;
      case '-':
        result = question[1] - question[2];
        break;
      case '*':
        result = question[1] * question[2];
        break;
      default:
    }
    return result;
  };

  const startRound = (countCorrect) => {
    if (countCorrect === 3) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const question = generateQuestion();
    console.log(`Question: ${question[1]} ${question[0]} ${question[2]}`);
    const correctAnswer = getCorrectAnswer(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      return startRound(countCorrect + 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  const startCountCorrect = 0;
  return startRound(startCountCorrect);
};
