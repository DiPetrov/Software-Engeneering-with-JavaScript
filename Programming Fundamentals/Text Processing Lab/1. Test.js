function solve(input, check) {

    input = input.split(' ');
    let counter = 0;

    for (let word of input) {
        if (word == check) {
            counter++;
        }
    }

    console.log(counter)
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');
