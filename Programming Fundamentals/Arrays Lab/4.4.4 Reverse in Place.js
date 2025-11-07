function solve(input) {

    for (let i = 0; i < input.length / 2; i++) {
        let reverse = input.length - 1 - i;
        let varOne = input[i];
        input[i] = input[reverse];
        input[reverse] = varOne
    }

    console.log(input.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']);