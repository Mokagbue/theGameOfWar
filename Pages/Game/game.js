const cards = require("../../Assets/cards.js")

let suit = Array.from(Array(13)).map((element, index) => index + 1);
let deck = suit.concat(suit, suit, suit);
console.log("Deck of cards: ", deck);
let shuffle = deck.sort(() => Math.random() - 0.5);
console.log("Shuffled deck... ", shuffle);

let handOne = shuffle.slice(0, 26);
let handTwo = shuffle.slice(26, 52);
console.log("Hand one: ", handOne);
console.log("Hand two: ", handTwo);

console.log(cards)
let warGame = (handOne, handTwo) => {
  
  console.log(handOne.pop(), handTwo.pop());
};
warGame(handOne, handTwo);
warGame(handOne, handTwo);
warGame(handOne, handTwo);
warGame(handOne, handTwo);
warGame(handOne, handTwo);
warGame(handOne, handTwo);
