function gladiatorInventory(arr) {

    // 1. Gladiator's inventory with all equipment -> strings, separated by whitespaces.
    // 2. I receive command and have to upgrade the inventory


    let gladiatorInventoryArr = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(' ')[0];
        let currentItem = arr[i].split(' ')[1];

        if (currentCommand === 'Buy') {
            if (gladiatorInventoryArr.includes(currentItem)) {
                continue;
            } else {
                gladiatorInventoryArr.push(currentItem);
            }

        } else if (currentCommand === 'Trash') {
            if (gladiatorInventoryArr.includes(currentItem)) {
                let currentItemIndex = gladiatorInventoryArr.indexOf(currentItem);
                gladiatorInventoryArr.splice(currentItemIndex, 1);
                i--;
            }

        } else if (currentCommand === 'Repair') {
            if (gladiatorInventoryArr.includes(currentItem)) {
                let currentItemIndex = gladiatorInventoryArr.indexOf(currentItem);
                gladiatorInventoryArr.push(currentItem);
                gladiatorInventoryArr.splice(currentItemIndex, 1);

            }
        } else if (currentCommand === 'Upgrade') {
            if (gladiatorInventoryArr.includes(currentItem.split('-')[0])){
                let currentItemIndex = gladiatorInventoryArr.indexOf(currentItem.split('-')[0]);
                gladiatorInventoryArr.splice(currentItemIndex + 1, 0, currentItem.split('-')[0] + ":" + currentItem.split('-')[1]);
            }
        }
    }

    console.log(gladiatorInventoryArr.join(' '));

}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);