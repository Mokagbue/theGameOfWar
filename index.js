let suit = Array.from(Array(13)).map((element, index) => index + 1);
let deck = suit.concat(suit, suit, suit);
console.log("Deck of cards: ", deck);

let shuffle = [...deck].sort(() => Math.random() - 0.5);
console.log("Shuffled deck... ", shuffle);

let handOne = shuffle.slice(0, 26);
let handTwo = shuffle.slice(26, 52);
console.log("Hand one: ", handOne);
console.log("Hand two: ", handTwo);

let war = (handOne, handTwo) => {
  let playerOneScore = 0;
  let playerTwoScore = 0;

  console.log("War never changes...");

  handOne.forEach((card, index) => {
    const cardTwo = handTwo[index];

    if (card === cardTwo) {
      console.log("Tie, no points scored.");
    } else if (card === 1) {
      console.log(
        `Player One Played: ${card}. Player Two Played: ${cardTwo}. Aces wins this round. Point to Player One.`
      );
      playerOneScore++;
    } else if (cardTwo === 1) {
      console.log(
        `Player One Played: ${card}. Player Two Played: ${cardTwo}. Aces wins this round. Point to Player Two.`
      );
      playerTwoScore++;
    } else if (card > cardTwo && (card && cardTwo) != 1) {
      console.log(
        `Player One Played: ${card}. Player Two Played: ${cardTwo}. Player One Wins this round.`
      );
      playerOneScore++;
    } else if (cardTwo > card && (card && cardTwo) != 1) {
      console.log(
        `Player One Played: ${card}. Player Two Played: ${cardTwo}. Player Two Wins this round.`
      );
      playerTwoScore++;
    }
  });

  console.log("Final Scores: ", playerOneScore, playerTwoScore);

  if (playerOneScore > playerTwoScore) {
    console.log("Player One has won the war... but at what cost.");
    return "Player One has won the war... but at what cost.";
  } else if (playerOneScore < playerTwoScore) {
    console.log("Player Two has won the war... but at what cost.");
    return "Player Two has won the war... but at what cost.";
  } else {
    console.log("No one wins in war...");
    return "No one wins in war...";
  }
};

war(handOne, handTwo);
