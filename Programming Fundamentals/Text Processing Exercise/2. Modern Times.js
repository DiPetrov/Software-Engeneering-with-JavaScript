function solve(input) {

    input = input.split(' ');
    let result = '';

    for (let i = 0; i < input.length; i++) {

        if (input[i].startsWith('#')) {
            let testWord = input[i].slice(1);

            if (testWord.length > 0 && testWord.split('').every(c => c >= 'A' || c < 'Z' &&
            c >= 'a' && c < 'z')) {
                console.log(testWord);
            }
        }
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');