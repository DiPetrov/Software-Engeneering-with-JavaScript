function solve(input) {

    let neighbourHouses = input[0].split('@').map(Number);
    let index = 1;
    let command = input[index];

    while(command !== 'Love!') {
        let [currentCommand, jumpValue] = command.split(' ');
        jumpValue = Number(jumpValue);

        for (let i = 0; i < neighbourHouses.length; i++) {
            if (jumpValue >= 0 && jumpValue < neighbourHouses.length) {
                if (neighbourHouses[jumpValue] === 0) {
                    console.log(`Place ${neighbourHouses[jumpValue]} already had Valentine's day.`);
                } else {
                    neighbourHouses[jumpValue] -= 2;
                    if (neighbourHouses[jumpValue] === 0) {
                        console.log(`Place ${neighbourHouses[jumpValue]} has Valentine's day.`);
                    }
                }
            } else {
                if (neighbourHouses[jumpValue] === 0) {
                    console.log(`Place ${neighbourHouses[jumpValue]} already had Valentine's day.`);
                } else {
                    neighbourHouses[jumpValue] -= 2;
                    if (neighbourHouses[jumpValue] === 0) {
                        console.log(`Place ${neighbourHouses[jumpValue]} has Valentine's day.`);
                }
            }
        }

        index++;
        command = input[index];
    }
}

solve(["10@10@10@2",
        "Jump 1",
        "Jump 2",
        "Love!"]);

// solve(["10@10@10@2",
//         "Jump 1",
//         "Jump 2",
//         "Love!"]);