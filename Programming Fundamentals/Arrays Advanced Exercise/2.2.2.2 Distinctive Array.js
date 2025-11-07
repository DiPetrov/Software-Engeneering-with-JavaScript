function solve(input) {

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                input.splice(j, 1);
                j--;
            }
        }
    }

    console.log(input.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);