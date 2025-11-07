function solve(input) {
    let treasure = input.shift().split('|');
    let index = 0;
    let command = input[index];


    while (command !== 'Yohoho!') {
        let [currentCommand, item1, item2, item3] = command.split(' ');

        if (currentCommand === 'Loot') {
            for (let i = 1; i < currentCommand.length; i++) {
                let item = treasure[i];
                if (item !== undefined && !treasure.includes(item)) {
                    initialChestLoot.unshift(item);
                }
            }
        } else if (currentCommand === 'Drop') {
            item1 = Number(item1);

            if (item1 >= 0 && item1 < treasure.length) {
                let oldItem = treasure[item1]
                treasure.splice(item1, 1);
                treasure.push(oldItem);
            }
        } else if (currentCommand === 'Steal') {
            item1 = Number(item1);
            let stolenItems = [];
            if (treasure.length > 0) {
                for (let i = 0; i < item1; i++) {
                    stolenItems.push(treasure.pop());

                }
            }
            console.log(stolenItems.reverse().join(', '));
        }

        index++;
        command = input[index];
    }


    if (treasure.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sumItemsLength = 0;

        for (let i = 0; i < treasure.length; i++) {
            let currentItem = treasure[i];
            sumItemsLength += currentItem.length;
        }

        let averageTreasureGain = sumItemsLength / treasure.length;
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`)
    }


}

solve(["Gold|Silver|Bronze|Medallion|Cup",
        "Loot Wood Gold Coins",
        "Loot Silver Pistol",
        "Drop 3",
        "Steal 3",
        "Yohoho!"]);

solve(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);