function solve(input) {
    input = input.sort((a, b) => a - b);

    let middle = input.length / 2;
    let newArr = [];

    for (let i = 0; i < middle; i++) {
        let smallToBig = input[i];
        let bigToSmall = input[input.length - 1 - i];

        newArr.push(bigToSmall);

        if (i !== input.length - 1 - i) {
            newArr.push(smallToBig);
        }
    }

    console.log(newArr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 4]);
solve([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
solve([690, 2, 47, 6, 45, 7, 34, 19, 32, 32]);