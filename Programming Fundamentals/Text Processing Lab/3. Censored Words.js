function censoredWords(sentence, word) {
    let replacementLength = word.length;
    let replacement = '*'.repeat(replacementLength);
    let result = sentence.replaceAll(word, replacement);

    while(sentence.includes(word)) {
        sentence = sentence.replace(word, replacement);
    }

    console.log(result);
}

censoredWords('A small sentence with some words', 'small');