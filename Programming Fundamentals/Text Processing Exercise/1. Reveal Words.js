function solve(word, text) {

    text = text.split(' ');
    word = word.split(', ');

    for (let i = 0; i < text.length; i++) {

        if (text[i].startsWith('*')){
            for (let j = 0; j < text.length; j++) {
                if (text[i].length === word[j].length) {
                    text[i] = word[j];
                    break;
                }
            }
        }
    }

    console.log(text.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');