function solve(numbers, power) {
    let specialNumber = power[0];
    let bombPower = power[1];

    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] === specialNumber) {
            let start = Math.max(i - bombPower, 0);
            let end = Math.min(i + bombPower, numbers.length - 1);
            numbers.splice(start, end - start + 1);
            i = start;
        } else {
            i++;
        }
    }

    let sum = numbers.reduce((a, b) => a + b, 0);
    console.log(sum);
}


solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);