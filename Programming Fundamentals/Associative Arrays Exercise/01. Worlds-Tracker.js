function solve(arr) {
    let searchedWords = arr.shift().split(' ');
    let occurances = {};

    for (let word of searchedWords) {
        occurances[word] = 0;
    }

    for (let word of arr) {
        if (word in occurances) {
            occurances[word]++;
        }
    }

    let entries = Object.entries(occurances).sort((a, b) => b[1] - a[1]);

    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);