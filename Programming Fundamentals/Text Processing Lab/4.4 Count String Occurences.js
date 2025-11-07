function solve(text, word) {

    let counter = 0;
    text = text.split(' ');

    while(text.includes(word)) {
        counter++;
        text.splice(text.indexOf(word), 1);
    }

    // for (let i = 0; i < text.length; i++) {
    //     if (text[i] === word) {
    //         counter++
    //     }
    // }

    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is');