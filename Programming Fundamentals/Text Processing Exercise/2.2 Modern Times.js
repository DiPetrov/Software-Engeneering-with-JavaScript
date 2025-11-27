function solve(input) {

    input = input.split(' ');

    for (let word of input) {
        if (word.startsWith('#')) {
            let cleanWord = word.slice(1);
            if (cleanWord.length > 0 && cleanWord.split('').every(c => c >= 'A' && c <= 'Z' || (c >= 'a' && c <= 'z'))) {
                console.log(cleanWord);
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');