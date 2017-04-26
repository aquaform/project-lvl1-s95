import readlineSync from 'readline-sync';

const gameDesc = { 'even': 'Answer "yes" if number even otherwise answer "no".\n' };

const welcomeUser = (gameType) => {
  if (gameType) console.log(gameDesc[gameType]);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return `${userName}`;
};

const startEvenGame = (userName) => {
  const trueResult = (number) =>
    (number % 2) === 0 ? 'yes' : 'no';
  const iter = (countCorrect) => {
    if (countCorrect === 3) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueResult(randomNumber)) {
      console.log('Correct!');
      return iter(countCorrect + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueResult(randomNumber)}'.`);
      return false;
    }
  };
  const startCountCorrect = 0;
  return iter(startCountCorrect);
};

export default (typeOfGame) => {
  const userName = welcomeUser(typeOfGame);
  if (typeOfGame === 'even') startEvenGame(userName);
};
