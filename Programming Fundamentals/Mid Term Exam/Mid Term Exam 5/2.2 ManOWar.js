function solve(input) {

    let pirateShipStatus = input[0].split('>').map(Number);
    let warShipStatus = input[1].split('>').map(Number);
    let maxHealth = Number(input[2]);
    let index = 3;
    let command = input[index];

    while(command !== 'Retire') {
        let [currentCommand, value1, value2, value3] = command.split(' ');
        value1 = Number(value1);
        value2 = Number(value2);
        value3 = Number(value3);

        switch(currentCommand) {
            case 'Fire':
                if (value1 >= 0 && value1 < warShipStatus.length) {
                    warShipStatus[value1] -= value2;
                    if (warShipStatus[value1] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            case 'Defend':
                if (value1 >= 0 && value1 < pirateShipStatus.length && value2 >= 0 && value2 < pirateShipStatus.length) {
                   for (let i = value1; i <= value2; i++) {
                       pirateShipStatus[i] -= value3;
                       if (pirateShipStatus[i] <= 0) {
                           console.log("You lost! The pirate ship has sunken.");
                           return;
                       }
                   }
                }
                break;
            case 'Repair':
                if (value1 >= 0 && value1 < pirateShipStatus.length) {
                    pirateShipStatus[value1] += value2;
                    if (pirateShipStatus[value1] > maxHealth) {
                        pirateShipStatus[value1] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let counter = 0;
                for (let section of pirateShipStatus) {
                    if (section < maxHealth * 0.2) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`)
                break;
            default:
        }

        index++;
        command = input[index];
    }

    let pirateShipSum = 0;
    let warShipSum = 0;

    for (let health of pirateShipStatus) {
        pirateShipSum += health;
    }

    for (let health of warShipStatus) {
        warShipSum += health;
    }

    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`);
}


// solve(["12>13>11>20>66",
//         "12>22>33>44>55>32>18",
//         "70",
//         "Fire 2 11",
//         "Fire 8 100",
//         "Defend 3 6 11",
//         "Defend 0 3 5",
//         "Repair 1 33",
//         "Status",
//         "Retire"]);

solve(["2>3>4>5>2",
        "6>7>8>9>10>11",
        "20",
        "Status",
        "Fire 2 3",
        "Defend 0 4 11",
        "Repair 3 18",
        "Retire"]);