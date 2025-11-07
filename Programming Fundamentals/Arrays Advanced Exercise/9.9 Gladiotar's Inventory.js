function solve(arr) {
    let itemsArr = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {

        let [command, equipment] = arr[i].split(' ');
        let upgrade = equipment.split('-')[1];

        switch(command) {
            case 'Buy':
                if (!itemsArr.includes(equipment)) {
                    itemsArr.push(equipment);
                }
                break;
            case 'Trash':
                if (itemsArr.includes(equipment)) {
                    itemsArr.splice(itemsArr.indexOf(equipment), 1);
                }
                break;
            case 'Repair':
                if (itemsArr.includes(equipment)) {
                    itemsArr.splice(itemsArr.indexOf(equipment), 1);
                    itemsArr.push(equipment);
                }
                break;
            case 'Upgrade':
                equipment = equipment.split('-')[0];

                if (itemsArr.includes(equipment)) {
                    let upgradeElement = equipment + ':' + upgrade;
                    let equipmentIndex = itemsArr.indexOf(equipment);
                    itemsArr.splice(equipmentIndex + 1, 0, upgradeElement);
                }
                break;
            default:
                console.log(`Invalid command!`);
        }
    }

    console.log(itemsArr.join(' '));
}

solve(['SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel']);

solve(['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']);