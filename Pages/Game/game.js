//const cards = require("../../Assets/cards.js");
import cards from "../../Assets/cards.js";

let deck = cards;
let shuffle = deck.sort(() => Math.random() - 0.5);
console.log("Shuffled deck... ", shuffle);

let handOne = shuffle.slice(0, 26);
let handTwo = shuffle.slice(26, 52);
document.getElementById('round').innerHTML = handOne;

console.log("Hand one: ", handOne);
console.log("Hand two: ", handTwo);



// let warGame = (handOne, handTwo) => {
//   let hOnePop = handOne.pop();
//   let hTwoPop = handTwo.pop();

//   document.getElementById('round').innerHTML = (hOnePop, hTwoPop);
//   // document.getElementById('round').innerHTML = hTwoPop;

//  console.log("Popped Off!", handOne, handTwo);
// };
// warGame(handOne, handTwo)

// warGame(handOne, handTwo);
/
