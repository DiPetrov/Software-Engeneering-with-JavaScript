function movingTarget(input) {

    let targetsArr = input[0].split(' ').map(Number);
    let index = 1;
    let command = input[index];

    while(command !== 'End') {
        let currentCommand = command.split(' ')[0];
        let currentIndex = Number(command.split(' ')[1]);
        let currentNumber = Number(command.split(' ')[2]);

        switch(currentCommand) {
            case 'Shoot':
                if (currentIndex >= 0 && currentIndex <= targetsArr.length - 1) {
                    targetsArr[currentIndex] -= currentNumber;

                    if (targetsArr[currentIndex] <= 0) {
                        targetsArr.splice(currentIndex, 1);
                    }
                }
                break;
            case 'Add':
                if (currentIndex >= 0 && currentIndex <= targetsArr.length - 1) {
                    targetsArr.splice(currentIndex, 0, currentNumber);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case 'Strike':
                if (currentIndex >= 0 && currentIndex <= targetsArr.length - 1) {
                    let startIndex = currentIndex - currentNumber;
                    let endIndex = currentIndex + currentNumber;

                    if (startIndex < 0) {
                        console.log(`Strike missed!`)
                    } else if (endIndex > targetsArr.length) {
                        console.log(`Strike missed!`)
                    } else {
                        targetsArr.splice(startIndex, endIndex - startIndex + 1);
                    }
                } else {
                    console.log(`Strike missed!`)
                }
                break;
            default:
                console.log(`Invalid Command`)
        }

        index++;
        command = input[index];
    }

    console.log(targetsArr.join('|'));
}

movingTarget((["52 74 23 44 96 110",
                "Shoot 5 10",
                "Shoot 1 80",
                "Strike 2 1",
                "Add 22 3",
                "End"]));

movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"]));