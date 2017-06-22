var cards = [
	{
	 rank: "queen",
	 suit: "hearts",
	 cardImage: "images/queen-of-hearts.png"
	},
	{
	 rank: "queen",
	 suit: "diamonds",
	 cardImage: "images/queen-of-diamonds.png"
	},
	{
	 rank: "king",
	 suit: "hearts",
	 cardImage: "images/king-of-hearts.png"
	},
	{
	 rank: "king",
	 suit: "diamonds",
	 cardImage: "images/king-of-diamonds.png"
	}

]
var cardsInPlay = [];

var checkForMatch = function(){
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");}
		else {alert("Try Again");}
}

var flipCard = function(cardID) {
console.log('User flipped ' + cards[cardID].rank);
console.log('User flipped ' + cards[cardID].suit);
console.log('User flipped ' + cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
}

flipCard(0,2);
flipCard(2,0);
