function countStringOccurences(text, searchWord) {
    text = text.replace(',', ' ');
    text = text.replace('.', ' ');
    text = text.replace('!', ' ');
    text = text.replace('?', ' ');
    text = text.replace(':', ' ');
    text = text.replace(';', ' ');

let allWords = text.split(' ');
let count = 0;

for (let word of allWords) {
    if (word === searchWord) {
        count++;
    }
}
    console.log(count)
}

countStringOccurences('This is a word and it also is a sentence', 'is');