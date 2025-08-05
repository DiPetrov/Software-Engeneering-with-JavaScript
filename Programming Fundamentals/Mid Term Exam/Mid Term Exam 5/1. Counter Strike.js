function counterStrike(input) {

    let battlesWon = 0;
    let startEnergy = Number(input[0]);

    let index = 1;
    let command = input[index];

    while(command !== 'End of battle') {
        let currentDistance = Number(command);


        if (startEnergy >= currentDistance) {
            startEnergy -= currentDistance;
            battlesWon++;
            if (battlesWon % 3 === 0) {
                startEnergy += battlesWon;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${startEnergy} energy`);
            return;
        }

        index++;
        command = input[index];
    }

    console.log(`Won battles: ${battlesWon}. Energy left: ${startEnergy}`);
}

counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);

counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
);