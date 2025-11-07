function solve(input) {

    let result = '';

    for (let i = 0; i < input.length; i++) {
        let char1 = input[i - 1];
        let char2 = input[i];

        if (char2 !== char1) {
            result += char2
        }
    }

    console.log(result)
}

solve('aaaaabbbbbcdddeeeedssaa');