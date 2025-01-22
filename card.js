let suits = ["hearts", "diamonds", "spades", "clubs"]
let ranks = [
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

export function generateDeck() {
    let deck = [];
    for (suit of suits) {
        for (rank of ranks) {
            deck.push({
                rank: rank.rank,
                value: rank.value,
                suit: suit,
                image: 'images/${rank.rank}_of_${suit.suit}.png'
            })
        }
    }
    return deck;
}