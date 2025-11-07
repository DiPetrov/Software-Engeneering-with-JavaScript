// function treasureHunt(input) {
//
//     let initialChestLoot = input.shift().split('|');
//     let index = 0;
//     let command = input[index];
//
//     while(command !== 'Yohoho!') {
//     let parts = command.split(' ');
//     let currentCommand = parts[0];
//     let firstItem = parts[1];
//     let secondItem;
//
//     if (parts[2] !== undefined) {
//          secondItem = parts[2];
//     }
//
//         let thirdItem;
//
//     if (parts[3] !== undefined) {
//         thirdItem = parts[3];
//     }
//
//     switch(currentCommand) {
//         case 'Loot':
//             if (!initialChestLoot.includes(firstItem) && firstItem !== undefined) {
//                 initialChestLoot.unshift(firstItem);
//             }
//
//             if (!initialChestLoot.includes(secondItem) && secondItem !== undefined) {
//                 initialChestLoot.unshift(secondItem);
//             }
//
//             if (!initialChestLoot.includes(thirdItem) && thirdItem !== undefined) {
//                 initialChestLoot.unshift(thirdItem);
//             }
//             break;
//         case 'Drop':
//             firstItem = Number(firstItem);
//             if (firstItem >= 0 && firstItem < initialChestLoot.length) {
//                 // let currentItemIndex = initialChestLoot.indexOf(firstItem);
//                 initialChestLoot.push(initialChestLoot[firstItem]);
//                 initialChestLoot.splice(firstItem, 1);
//             }
//             break;
//         case 'Steal':
//             firstItem = Number(firstItem);
//             if (initialChestLoot.length < firstItem) {
//                 firstItem = initialChestLoot.length;
//                 let stolenItems = [];
//
//                for (let i = 0; i < initialChestLoot.length; i++) {
//                    stolenItems.push(initialChestLoot[i]);
//                    initialChestLoot.splice(i, 1);
//                    i--;
//                }
//                 console.log(stolenItems.join(', '));
//             } else {
//                 let startIndex = initialChestLoot.length - firstItem;
//                 let stolenItems = [];
//
//                 for (let i = startIndex; i < initialChestLoot.length; i++) {
//                     stolenItems.push(initialChestLoot[i]);
//                     initialChestLoot.splice(i, 1);
//                     i--;
//                 }
//                 console.log(stolenItems.join(', '));
//             }
//
//
//             break;
//         default:
//             console.log(`Error`)
//     }
//         index++;
//         command = input[index];
//     }
//
//     let sumLength = 0;
//
//     if (initialChestLoot.length === 0) {
//         console.log(`Failed treasure hunt.`);
//     } else {
//         for (let item of initialChestLoot) {
//             sumLength += item.length;
//         }
//
//         console.log(`Average treasure gain: ${(sumLength / initialChestLoot.length).toFixed(2)} pirate credits.`);
//     }
// }
//
// treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"]);
//
// treasureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"]);


function treasureHunt(input) {

    let initialChestLoot = input.shift().split('|');
    let index = 0;
    let command = input[index];

    while(command !== 'Yohoho!') {
        let parts = command.split(' ');
        let currentCommand = parts[0];
        let firstItem = parts[1];

        switch(currentCommand) {
            case 'Loot':
                for (let i = 1; i < parts.length; i++) {
                let item = parts[i];
                    if (item !== undefined && !initialChestLoot.includes(item)) {
                        initialChestLoot.unshift(item);
                    }
                }
                break;
            case 'Drop':
                if (firstItem >= 0 && firstItem < initialChestLoot.length) {
                    initialChestLoot.push(initialChestLoot.splice(firstItem, 1)[0]);
                }
                break;
            case 'Steal':
                if (firstItem > initialChestLoot.length) {
                    firstItem = initialChestLoot.length;
                    }

               let stolenItems = initialChestLoot.slice(-firstItem);
               initialChestLoot.splice(-firstItem, firstItem);
               console.log(stolenItems.join(', '));
                break;
            default:
                console.log(`Error`)
        }
        index++;
        command = input[index];
    }

    let sumLength = 0;

    if (initialChestLoot.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        for (let item of initialChestLoot) {
            sumLength += item.length;
        }
        console.log(`Average treasure gain: ${(sumLength / initialChestLoot.length).toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);