function solve(check, text) {

    check = check.split(', ');
    text = text.split(' ');

    for (let word of check) {
        for (let i = 0; i < text.length; i++) {
            if (text[i].startsWith('*') && text[i].length === word.length) {
                text[i] = word;
            }
        }
    }

    console.log(text.join(' '))
}

// solve('great',
//         'softuni is ***** place for learning new programming languages');

solve('great, learning',
        'softuni is ***** place for ******** new programming languages');