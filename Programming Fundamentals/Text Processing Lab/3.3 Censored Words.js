function solve(text, word) {

    let censored = text;
    let replaced = '';

    while(censored.includes(word)) {
        let newWord = '*'.repeat(word.length);
        replaced = censored.replace(word, newWord);
        censored = replaced;

    }

    console.log(replaced);
}

solve('A small sentence with some words', 'small');