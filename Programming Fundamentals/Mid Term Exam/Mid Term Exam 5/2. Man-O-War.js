function manOWar(input) {

    let pirateShipStatus = input[0].split('>').map(Number);
    let warShipStatus = input[1].split('>').map(Number);
    let maximumHealthCapacity = Number(input[2]);
    let minimumHealthCapacity = maximumHealthCapacity * 0.2;
    let index = 3;
    let command = input[index];

    while(command !== 'Retire') {

    let parts = command.split(' ');
    let currentCommand = parts[0];
    let currentIndex = Number(parts[1]);
    let firstValue = Number(parts[2]);
    let thirdValue = Number(parts[3]);

    switch(currentCommand) {
        case 'Fire':
            if (currentIndex >= 0 && currentIndex < warShipStatus.length) {
                warShipStatus[currentIndex] -= firstValue;
                if (warShipStatus[currentIndex] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }
            break;
        case 'Defend':
            if (currentIndex >= 0 && firstValue < pirateShipStatus.length) {
                for (let i = currentIndex; i <= firstValue; i++) {
                    pirateShipStatus[i] -= thirdValue;
                    if (pirateShipStatus[i] <= 0) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                }
            }
            break;
        case 'Repair':
            if (currentIndex >= 0 && currentIndex < pirateShipStatus.length) {
                pirateShipStatus[currentIndex] += firstValue;
                if (pirateShipStatus[currentIndex] > maximumHealthCapacity) {
                    pirateShipStatus[currentIndex] = maximumHealthCapacity;
                }
            }
            break;
        case 'Status':
            let count = 0;

            for (let section of pirateShipStatus) {
                if (section < minimumHealthCapacity) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`)
            break;
        default:
            console.log(`Error`)
    }

        index++;
        command = input[index];
    }

   let pirateShipSectionSum = 0;
   for (let section of pirateShipStatus) {
       pirateShipSectionSum += section;
   }

   let warShipSectionSum = 0;
   for (let section of warShipStatus) {
       warShipSectionSum += section;
   }

    console.log(`Pirate ship status: ${pirateShipSectionSum}`);
    console.log(`Warship status: ${warShipSectionSum}`);
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
