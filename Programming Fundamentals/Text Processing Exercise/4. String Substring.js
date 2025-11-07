function solve(word, text) {
let words = text.split(' ');

    for (let el of words) {
        if (el.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;

        }
    }

        console.log(`${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language');