function solve(input) {

    let equalSum = false;

    if (input.length === 1) {
        console.log(0);
        return;
    }

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        if (i - 1 < 0) {
            leftSum = 0;
        } else {
            for (let j = i - 1; j >= 0; j--) {
                leftSum += input[j];
            }
        }

        if (i + 1 > input.length) {
            rightSum = 0;
        } else {
            for (let k = i + 1; k < input.length; k++) {
                rightSum += input[k];
            }
        }

        if (leftSum === rightSum) {
            equalSum = true;
            console.log(i);
        }
    }

    if (!equalSum) {
        console.log('no');
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
