function solve(input) {

    let oddOccurrences = new Map();
    input = input.split(' ');
    for (let word of input) {
        word = word.toLowerCase();
        if (oddOccurrences.has(word)) {
            oddOccurrences.set(word, oddOccurrences.get(word) + 1);
        } else {
            oddOccurrences.set(word, 1);
        }
    }

    let result = [];
    for (let occurrence of oddOccurrences) {

        if (occurrence[1] % 2 !== 0) {
            result.push(occurrence[0]);
        }
    }

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');