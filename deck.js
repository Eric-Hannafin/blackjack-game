export class Deck {
    constructor() {
        this.suits = ["hearts", "diamonds", "spades", "clubs"];
        this.ranks = [
            { rank: "ace", value: "11" },
            { rank: "queen", value: "10" },
            { rank: "jack", value: "10" },
            { rank: "nine", value: "9" },
            { rank: "eight", value: "8" },
            { rank: "seven", value: "7" },
            { rank: "six", value: "6" },
            { rank: "five", value: "5" },
            { rank: "four", value: "4" },
            { rank: "three", value: "3" },
            { rank: "two", value: "2" },
        ]
        this.deck = this.createDeck();
    }

    createDeck() {
        let deck = [];
        for (let suit of this.suits) {
            for (let rank of this.ranks) {
                deck.push({
                    rank: rank.rank,
                    value: rank.value,
                    suit: suit,
                    image: 'images/${rank.rank}_of_${suit.suit}.png'
                });
            }
        }
        return deck;
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    drawCard() {
        return this.deck.pop();
    }
}