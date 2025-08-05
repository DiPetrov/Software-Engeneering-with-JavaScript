function heartDelivery(inputArr) {

    let neighbourhood = inputArr.shift().split('@').map(Number);
    let lastIndex = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i];

        if (command === 'Love!') {
            console.log(`Cupid's last position was ${lastIndex}.`);
            let unhappyHouses = neighbourhood.filter(x => x !== 0);
            if (unhappyHouses.length > 0) {
                console.log(`Cupid has failed ${unhappyHouses.length} places.`)
            } else {
                console.log(`Mission was successful.`)
            }
            return;
        }

        let jumpParams = command.split(' ');
        let jumpValue = Number(jumpParams[1]);

        lastIndex += jumpValue;
        if (lastIndex >= neighbourhood.length) {
            lastIndex = 0;
        }

        if (neighbourhood[lastIndex] === 0) {
            console.log(`Place ${lastIndex} already had Valentine's day.`)
        } else {
            neighbourhood[lastIndex] -= 2;
            if (neighbourhood[lastIndex] === 0) {
                console.log(`Place ${lastIndex} has Valentine's day.`)
            }
        }
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);