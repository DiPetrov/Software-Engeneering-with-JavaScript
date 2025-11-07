function solve(input, number) {

    for (let i = 0; i < input.length; i++) {

        for (let j = i + 1; j < input.length; j++) {

            if (input[i] + input[j] === number) {
                console.log(input[i], input[j]);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);