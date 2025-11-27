function solve(input) {

    let initialLoot = input.shift().split('|');
    let index = 0;
    let command = input[index];

    while(command !== 'Yohoho!') {
        let currentCommand = command.split(' ')[0];

        if (currentCommand === 'Loot') {
            let currentString = command.split(' ');
            for (let i = 1; i < currentString.length; i++) {
                let currentItem = currentString[i];
                if (!initialLoot.includes(currentItem)) {
                    initialLoot.unshift(currentItem);
                }
            }
        } else if (currentCommand === 'Drop') {
            let currentIndex = Number(command.split(' ')[1]);
            if (currentIndex >= 0 && currentIndex < initialLoot.length) {
                let addedItem = initialLoot[currentIndex];
                initialLoot.splice(currentIndex, 1);
                initialLoot.push(addedItem);
            }
        } else if (currentCommand === 'Steal') {
            let removedItems = [];
            let currentIndex = Number(command.split(' ')[1]);
            if (currentIndex >= initialLoot.length) {
                for (let i = 0; i < initialLoot.length; i++) {

                    let removedIndex = initialLoot.indexOf(initialLoot[i]);
                    let removedItem = initialLoot.splice(removedIndex, 1);
                    removedItems.push(removedItem)
                    i--;
                }
            } else {
                for (let i = initialLoot.length - currentIndex; i < initialLoot.length; i++) {
                    let removedIndex = initialLoot.indexOf(initialLoot[i]);
                    let removedItem = initialLoot.splice(removedIndex, 1);
                    removedItems.push(removedItem)
                    i--;
                }
            }
            console.log(removedItems.join(', '))
        }

        index++;
        command = input[index];
    }

    if (initialLoot.length === 0) {
        console.log('Failed treasure hunt.');
    } else {
        let sumLength = 0;
        for (let item of initialLoot) {

            for (let i = 0; i < item.length; i++) {
                sumLength++;
            }
        }

        let sum = sumLength / initialLoot.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
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