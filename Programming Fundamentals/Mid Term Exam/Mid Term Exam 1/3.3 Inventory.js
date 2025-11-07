function solve(input) {
    let arr = input.shift().split(', ');
    let index = 0;
    let command = input[index];

    while(command !== 'Craft!') {
        let [currentCommand, item] = command.split(' - ');

        if (currentCommand === 'Collect') {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        } else if (currentCommand === 'Drop') {
            if (arr.includes(item)) {
                arr.splice(arr.indexOf(item), 1);
            }
        } else if (currentCommand === 'Combine Items') {
            let oldItem = item.split(':')[0];
            let newItem = item.split(':')[1];
            if (arr.includes(oldItem)) {
                arr.splice(arr.indexOf(oldItem) + 1, 0, newItem);
            }
        } else if (currentCommand === 'Renew') {
            if (arr.includes(item)) {
                arr.push(item);
                arr.splice(arr.indexOf(item), 1);
            }
        }

        index++;
        command = input[index];
    }
    console.log(arr.join(', '));
}

// solve([
//         'Iron, Sword',
//         'Drop - Bronze',
//         'Combine Items - Sword:Bow',
//         'Renew - Iron',
//         'Craft!']);

solve([
    'Iron, Wood, Sword',
        'Collect - Gold',
        'Drop - Wood',
        'Craft!']);