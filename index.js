import { Deck } from './deck.js'

let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el")

let deck = new Deck();

function startGame() {
    renderGame()
}

function resetGame() {
    sum = 0;
    sumEl.textContent = "Sum: "
    cardEl.textContent = "Cards: "
}

function renderGame() {
    console.log(test)
    sumEl.textContent = "Sum: " + sum
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
        resetGame()
    }
    messageEl.textContent = message
}

function drawCard() {
    console.log("Drawing a new card from the deck!")
    let newCard = Math.floor((Math.random() * 10) + 1);
    cards.push(newCard)
    sum += newCard
    cardEl.textContent = "Cards: "
    renderGame()
}

function updateCards(newCard) {
    cardEl.textContent += " " + newCard
}

function generateDeck() {
    deck.createDeck;
    deck.shuffle;
}

document.getElementById("startButton").addEventListener("click", () => startGame());
document.getElementById("drawCardButton").addEventListener("click", () => drawCard())
