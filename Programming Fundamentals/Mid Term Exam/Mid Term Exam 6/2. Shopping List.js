function shoppingList(input) {

    let shoppingListArr = input.shift().split('!');
    let index = 0;
    let command = input[index];

    while(command !== 'Go Shopping!') {
        let [currentCommand, currentGrocery, newName] = command.split(' ');

        switch(currentCommand) {
            case 'Urgent':
                if (!shoppingListArr.includes(currentGrocery)) {
                    shoppingListArr.unshift(currentGrocery);
                }
                break;
            case 'Unnecessary':
                if (shoppingListArr.includes(currentGrocery)) {
                    shoppingListArr.splice(shoppingListArr.indexOf(currentGrocery), 1);
                }
                break;
            case 'Correct':
                if (shoppingListArr.includes(currentGrocery)) {
                    let newGrocery = shoppingListArr.indexOf(currentGrocery);
                    shoppingListArr[newGrocery] = newName;
                }
                break;
            case 'Rearrange':
                if (shoppingListArr.includes(currentGrocery)) {
                    shoppingListArr.push(currentGrocery);
                    shoppingListArr.splice(shoppingListArr.indexOf(currentGrocery, 0), 1);
                }
                break;
            default:
                console.log(`Error`)
        }

        index++;
        command = input[index];
    }

    console.log(shoppingListArr.join(', '))

}

shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"]);