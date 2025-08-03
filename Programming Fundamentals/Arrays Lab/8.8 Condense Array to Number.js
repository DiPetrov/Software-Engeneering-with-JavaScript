function solve(numbers) {

    if (numbers.length === 1) {
        console.log(numbers[0]);
        return;
    }

    while (numbers.length > 1) {
        let condensed = [];

        for (let i = 0; i < numbers.length - 1; i++) {
            condensed.push(numbers[i] + numbers[i + 1]);
        }

        numbers = condensed;
    }

    console.log(numbers[0]);
}

solve([2, 10, 3]);