function solve(input) {

    let sequenceElements = input.shift()
                                .split(' ')
                                .map(Number);
    let index = 0;
    let command = input[index];

    while(command != 'End') {
        let currentCommand = command.split(' ')[0]
        let indexElement = Number(command.split(' ')[1]);
        let power = Number(command.split(' ')[2]);

        switch(currentCommand) {
            case 'Shoot':
                if (indexElement >= 0 && indexElement < sequenceElements.length) {
                    sequenceElements[indexElement] -= power;
                    if (sequenceElements[indexElement] <= 0) {
                        sequenceElements.splice(indexElement, 1);
                    }
                }
                break;
            case 'Add':
                if (indexElement >= 0 && indexElement < sequenceElements.length) {
                    sequenceElements.splice(indexElement, 0, power);
                    } else {
                    console.log(`Invalid placement!`)
                }
                break;
            case 'Strike':
                // let radius = sequenceElements.indexOf(sequenceElements[indexElement]);
                // let radius = indexElement;
                let startIndex = indexElement - power;
                let endIndex = indexElement + power;

                if (startIndex >= 0 && startIndex < sequenceElements.length && endIndex >= 0 && endIndex < sequenceElements.length) {
                    sequenceElements.splice(startIndex, endIndex - startIndex + 1);
                } else {
                    console.log(`Strike missed!`);
                }

                break;
            default:
                console.log(`Invalid command!`)
        }
        index++;
        command = input[index];
    }

    console.log(`${sequenceElements.join('|')}`)
}

solve(["52 74 23 44 96 110",
        "Shoot 5 10",
        "Shoot 1 80",
        "Strike 2 1",
        "Add 22 3",
        "End"]);

solve(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);

// solve(["52 74 23 44 96 110 44 400 800 22 11 340 18",
//     "Shoot 5 10",
//     "Shoot 1 80",
//     "Strike 2 1",
//     "Add 22 3",
//     "Add 3 5",
//     "Strike 3 2",
//     "End"]);


