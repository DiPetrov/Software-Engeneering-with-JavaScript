function solve(sequenceLength, sumPreviousElements) {

    let result = [1];
    let sum = 0;

        while(result.length < sequenceLength) {

            for (let j = 1; j <= sumPreviousElements; j++) {

                if (result.length <= sumPreviousElements) {

                    for (let num of result) {
                        sum += num;
                    }

                    if (result.length < sequenceLength) {
                        result.push(sum);
                    }

                } else if (result.length < sequenceLength) {

                    for (let k = 0; k < sumPreviousElements; k++) {
                        let currentElement = result[result.length - sumPreviousElements + k];

                        sum += currentElement;
                    }

                    if (result.length < sequenceLength) {
                        result.push(sum);
                    }
                }

                sum = 0;
            }
        }

    console.log(result.join(' '));
}

solve(2, 2);
solve(8, 2);