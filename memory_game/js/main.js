var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = cards[1];
var cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
//cardsInPlay.push(cardThree);
//cardsInPlay.push(cardFour);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");}
	else alert("Try Again");

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);
//console.log("user flipped " + cardThree);
//console.log("user flipped " + cardFour);