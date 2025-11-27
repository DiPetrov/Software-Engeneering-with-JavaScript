function solve(input) {
    let wordOccurrence = new Map();

    for (let i = 0; i < input.length; i++) {
        let currentWord = input[i];
        let counter = 0;

        // if (currentWord in wordOccurrence) {
        //     counter++;
        //     wordOccurrence[currentWord] += counter;
        // } else {
        //     counter++;
        //     wordOccurrence[currentWord] = counter;
        // }

        if (wordOccurrence.has(currentWord)) {
            counter++;
            wordOccurrence.set(currentWord, wordOccurrence.get(currentWord) + counter);
        } else {
            counter++;
            wordOccurrence.set(currentWord, counter);
        }
    }

    // let sorted = Object.entries(wordOccurrence).sort((a, b) => b[1] - a[1]);
    let sorted = Array.from(wordOccurrence).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`)
    }
}

// solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);