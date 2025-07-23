function solve(arr) {

    let result = [];
    let isTrue = true;


    for (let i = 0; i < arr.length; i++) {
        let currentSequence = [];

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] !== arr[j]) {
                isTrue = false;
                break;
            } else {
                currentSequence.push(arr[i], arr[j]);
            }
        }

        if (currentSequence.length > result.length) {
            result = currentSequence;
        }
    }

    console.log(result.join(' '));
}



solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);