function smallestTwoNumbers(arr) {

    let newArr = arr.sort(function solve(first, second) {
        if (first < second) {
            return -1;
        } else if (first > second) {
            return 1;
        } else {
            return 0;
        }
    })

    console.log(newArr.slice(0, 2).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);

