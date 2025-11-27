function solve(input) {

    let counter = 1;
    let biggestCounter = 0;
    let sequenceLength = 0;
    let largestSequenceLength = 0;
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i];
        let nextElement = input[i + 1];

        if (currentElement === nextElement) {
           counter++;
           sequenceLength = currentElement;
        } else {
            if (counter > biggestCounter) {
                biggestCounter = counter;
                largestSequenceLength = sequenceLength;
                counter = 1;
            } else {
                counter = 1;
            }
        }
    }

    for (let i = 0; i < biggestCounter; i++) {
        result.push(largestSequenceLength);
    }

    console.log(result.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);