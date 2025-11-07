function solve(arr) {

    if (arr.length === 1) {
        console.log(arr.join(' '));
        return;
    }

    let condensedArr = [];

    while(true) {
        let sum = 0;

        for (let i = 0; i < arr.length - 1; i++) {

            let numberOne = arr[i];
            let numberTwo = arr[i + 1];

            sum += numberOne;
            sum += numberTwo;

            condensedArr.push(sum);
            sum = 0;
        }

        arr = condensedArr;
        condensedArr = [];

        if (arr.length === 1) {
            console.log(arr.join(' '));
            return;
        }
    }
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([2, 3, 4, 5]);
solve([1]);

// 2+3 3+4 4+5 -> 5+7 7+9 -> 12 + 16