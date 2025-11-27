function solve(input) {

    input = input.split('');
    let result;

    for (let i = 0; i < input.length; i++) {

        if (result === undefined) {
            result = input[i];
        }

        if (!result.endsWith(input[i])) {
            result += input[i];
        }
    }
    console.log(result)
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');