const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
const suits = ["♦", "♥", "♠", "♣"];

function generateRandomCard() {
	const randomValueIndex = Math.floor(Math.random() * cardValues.length);
	const randomSuitIndex = Math.floor(Math.random() * suits.length);
	const cardValue = cardValues[randomValueIndex];
	const suit = suits[randomSuitIndex];
	const cardValueDiv = document.querySelector(".card-value");
	cardValueDiv.textContent = cardValue + " of " + suit;
}

window.addEventListener("load", generateRandomCard);
window.addEventListener("refresh", generateRandomCard);
