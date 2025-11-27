function solve(input) {

    // We are given first a field size and second the indexes of ladybugs inside the field. The next elements are the commands.
    // A ladybug changes its position either to the left or to the right by a given fly length.
    /* If a ladybug receives a command to land on a fellow ladybug, she continues to fly in the same direction with
     the same fly length. */
    // If a ladybug flies out of the field, it is gone.
    // At the end for each cell that has ladybug on it print 1 and for each empty cell print 0.

    let fieldSize = Number(input.shift());
    let ladyBugs = input[0].split(' ').map(Number);
    let result = [];
    let pushed = false;

    while(result.length < fieldSize) {

        if (pushed === false) {

            for (let i = 0; i < fieldSize; i++) {
                result.push(0);
            }
            pushed = true;

            for (let i = 0; i < ladyBugs.length; i++) {

                let currentNumber = ladyBugs[i];
                result[currentNumber] = 1;
            }
        }
    }

    for (let i = 1; i < input.length; i++) {
        let [index, direction, flyLength] = input[i].split(' ');
        index = Number(index);
        flyLength = Number(flyLength);

        if (index >= 0 && index < result.length - 1) {
            if (direction === 'right') {
                if (result[index] === 1 && index + flyLength > result.length - 1) {
                    result[index] = 0;
                    break;
                }

                if (result[index] === 1 && result[index + flyLength] !== 1 ) {
                    result[index] = 0;
                    result[index + flyLength] = 1;
                } else {
                    for (let j = index + flyLength; j < result.length; j++) {
                        if (result[j] !== 1) {
                            result[index] = 0;
                            result[j] = 1;
                            break;
                        } else {
                            result[index] = 0;
                            break;
                        }
                    }
                }
            } else if (direction === 'left') {
                if (result[index] === 1 && index - flyLength < 0) {
                    result[index] = 0;
                    break;
                }

                if (result[index] === 1 && result[index - flyLength] !== 1 ) {
                    result[index] = 0;
                    result[index - flyLength] = 1;
                } else {
                    for (let k = index - flyLength; k >= 0; k--) {
                        if (result[k] !== 1) {
                            result[index] = 0;
                            result[k] = 1;
                            break;
                        } else {
                            result[index] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }

    console.log(result.join(' '));
}

solve([ 3, '0 1',
        '0 right 1',
        '2 right 1' ]);

solve([ 3, '0 1 2',
        '0 right 1',
        '1 right 1',
        '2 right 1']);

solve([ 5, '3',
        '3 left 2',
        '1 left -2']);

// solve([ 9, '0 2 4 7',
//     '0 right 1',
//     '1 right 1',
//     '2 right 1']);