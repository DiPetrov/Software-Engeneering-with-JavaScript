function magicCards(input) {

let oldDeckArr = input[0].split(':')
let newDeckArr = [];

let index = 1;
let command = input[index];

while(command !== "Ready" ) {
    let [currentCommand, valueOne, valueTwo] = command.split(' ');
    if (command.includes('Shuffle')) {
        currentCommand = 'Shuffle deck'
    }

    switch (currentCommand) {

        case 'Add':
            if (oldDeckArr.includes(valueOne)) {
                newDeckArr.push(valueOne);
            } else {
                console.log(`Card not found.`)
            }
            break;
        case 'Insert':
            valueTwo = Number(valueTwo);
            if (oldDeckArr.includes(valueOne)) {
                if (valueTwo >= 0 && valueTwo <= newDeckArr.length) {
                    newDeckArr.splice(valueTwo, 0, valueOne);
                } else {
                    console.log(`Error!`);
                }
            } else {
                console.log(`Error!`);
            }
            break;
        case 'Remove':
            if (newDeckArr.includes(valueOne)) {
                newDeckArr.splice(newDeckArr.indexOf(valueOne), 1);
            } else {
                console.log(`Card not found.`);
            }
            break;
        case 'Swap':
            // let cardOneIndex = newDeckArr.indexOf(valueOne);
            // let cardTwoIndex = newDeckArr.indexOf(valueTwo);
            let tempVar = '';
            for (let i = 0; i < newDeckArr.length; i++) {

                if (newDeckArr[i] === valueOne) {
                    tempVar = newDeckArr[i];
                    newDeckArr[i] = valueTwo;
                    continue;
                }

                if (newDeckArr[i] === valueTwo) {
                    newDeckArr[i] = tempVar;
                }
            }
            break;
        case 'Shuffle deck':
            newDeckArr.reverse();
            break;
        default:
            console.log(`Invalid Command!`)
    }

    index++;
    command = input[index];
}

    console.log(newDeckArr.join(' '));

}

magicCards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
            "Add Moonfire",
            "Add Bite",
            "Insert Claw 0",
            "Swap Claw Moonfire",
            "Remove Bite",
            "Ready"]);
magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
            "Add UndergroundSea",
            "Add Timetwister",
            "Remove Wrath",
            "Add CopyArtifact",
            "Shuffle deck",
            "Ready"]);
magicCards(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
            "Add BlackLotus",
            "Insert Claw 1",
            "Add Moonfire",
            "Add Bite",
            "Ready"]);

