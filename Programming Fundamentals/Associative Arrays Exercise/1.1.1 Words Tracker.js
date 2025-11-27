function solve(input) {

    let wordsTracker = new Map();
    let words = input.shift().split(' ');

    for (let word of words) {
        wordsTracker.set(word, 0);
    }

    for (let word of input) {

        if (wordsTracker.has(word)) {
            wordsTracker.set(word, wordsTracker.get(word) + 1);
        }
    }

    let sorted = Array.from(wordsTracker).sort((a, b) => b[1] - a[1]);
    for (let element of sorted) {
        console.log(`${element[0]} - ${element[1]}`);
    }
}

solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

solve(['is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);