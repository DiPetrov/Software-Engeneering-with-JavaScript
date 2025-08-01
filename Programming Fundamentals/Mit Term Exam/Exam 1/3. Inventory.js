function inventory(arr) {

    let inventoryArr = arr.shift().split(', ');
    let index = 0;
    let command = arr[index];

    while(command !== 'Craft!') {
        let currentCommand = command.split(' - ')[0];
        let currentItem = command.split(' - ')[1];

        if (currentCommand === 'Collect') {
            if (inventoryArr.includes(currentItem)) {

            } else {
                inventoryArr.push(currentItem);
            }
        } else if (currentCommand === 'Drop') {
            if (inventoryArr.includes(currentItem)) {
                let currentItemIndex = inventoryArr.indexOf(currentItem);
                inventoryArr.splice(currentItemIndex, 1);
            }
        } else if (currentCommand === 'Combine Items') {
            if (inventoryArr.includes(currentItem.split(':')[0])) {
                let currentItemIndex = inventoryArr.indexOf(currentItem.split(':')[0]);
                inventoryArr.splice(currentItemIndex + 1, 0, currentItem.split(':')[1]);
            }
        } else if (currentCommand === 'Renew') {
            if (inventoryArr.includes(currentItem)) {
                let currentItemIndex = inventoryArr.indexOf(currentItem);
                inventoryArr.push(currentItem);
                inventoryArr.splice(currentItemIndex, 1);
            }
        }

        index++;
        command = arr[index];
    }

    console.log(inventoryArr.join(', '));
}

inventory(['Iron, Wood, Sword',  'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);