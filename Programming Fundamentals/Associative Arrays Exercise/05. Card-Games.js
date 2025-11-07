function solve(arr) {
    let playersCards = {};
    let powerValues = {};
    let typesValues = {};

    for (let playerDeck of arr) {
        let [playerName, cardsStr] = playerDeck.split(': ');
        let cards = cardsStr.split(', ');

        if (playerName in playersCards) {
        playersCards[playerName].push(...cards);
        }
    }

    let entries = Object.entries(playerCards);

    for (let [name, deck] of entries) {
        let uniqueDeck = new Set(deck);
        let deckValue = 0;

        for (let card of uniqueDeck) {
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];

            let cardValue = powerValues[power] * typesValues[type]
            deckValue += cardValue;
        }
        console.log(name);
        console.log(deck)
    }

    console.log(`${name}: ${deckValue}`);
}

solve([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD']);