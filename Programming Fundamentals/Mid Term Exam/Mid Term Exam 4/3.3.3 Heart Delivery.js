function solve(input) {
    let houses = input[0].split('@').map(Number);
    let lastPosition = 0;
    let index = 1;
    let command = input[index];

    while(command !== 'Love!') {
        let jumpLength = Number(command.split(' ')[1]);
        jumpLength += lastPosition;

        if (jumpLength >= 0 && jumpLength < houses.length) {
            if (houses[jumpLength] !== 0) {
                houses[jumpLength] -= 2;
                if (houses[jumpLength] === 0) {
                    console.log(`Place ${jumpLength} has Valentine's day.`)
                }
            } else {
                console.log(`Place ${jumpLength} already had Valentine's day.`)
            }
        } else if (jumpLength > houses.length - 1) {
            jumpLength = 0;
            if (houses[jumpLength] !== 0) {
                houses[jumpLength] -= 2;
                if (houses[jumpLength] === 0) {
                    console.log(`Place ${jumpLength} has Valentine's day.`)
                }
            } else {
                console.log(`Place ${jumpLength} already had Valentine's day.`)
            }
        }

        lastPosition = jumpLength;
        index++;
        command = input[index];
    }

    console.log(`Cupid's last position was ${lastPosition}.`)

    if (houses.every(x => x === 0)) {
        console.log("Mission was successful.");
    } else {
        let counter = 0;
        for (let house of houses) {
            if (house > 0) {
                counter++;
            }
        }
        console.log(`Cupid has failed ${counter} places.`)
    }
}

// solve(["10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);

solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);