import readlineSync, { question } from 'readline-sync';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
  };
let random = getRandomInt(1, 100);
const introText = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${random}\nYour answer: `);
let temp = introText;
const evenOrOdd = (n) => {
  return n % 2 === 0 ? 'yes' : 'no'
};
const checkFunction = (temp) => {
  let count = 0;
    while (count !== 2) {
      if (evenOrOdd(random) === temp) {
        count += 1;
        console.log('Correct!');
        readlineSync.question(`Question: ${getRandomInt(1, 100)}\nYour answer: `);
    }
    else return `${introText} is wrong answer ;(. Correct answer was ${evenOrOdd(temp)}\nLet's try again, Bill!.`;
  }
  return 'Congratulations, Bill!';
}
export { introText, random, checkFunction, temp};
