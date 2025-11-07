function solve(input) {
    let arr = input.shift().split('!');
    let index = 0;
    let command = input[index];

    while(command !== 'Go Shopping!') {
        let [currentCommand, item, newItem] = command.split(' ');

        switch(currentCommand) {
            case 'Urgent':
                if (!arr.includes(item)) {
                    arr.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (arr.includes(item)) {
                    arr.splice(arr.indexOf(item), 1);
                }
                break;
            case 'Correct':
                if (arr.includes(item)) {
                    let oldItem = arr.indexOf(item);
                    arr[oldItem] = newItem;
                }
                break;
            case 'Rearrange':
                if (arr.includes(item)) {
                    let old = arr[arr.indexOf(item)];
                    arr.push(old);
                    arr.splice(arr.indexOf(item), 1);

                }
                break;
            default:
                console.log(`Error!`)
        }
        index++;
        command = input[index];
    }
    console.log(arr.join(', '));
}

solve(["Tomatoes!Potatoes!Bread",
        "Unnecessary Milk",
        "Urgent Tomatoes",
        "Go Shopping!"]);

solve(["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"]);

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Onion",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);