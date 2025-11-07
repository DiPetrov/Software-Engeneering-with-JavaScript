function solve(input) {
    let arr = input[0].split(' ').map(Number);

    for (let i = 1; i < input.length; i++) {
         let [command, number, index] = input[i].split(' ');
         number = Number(number);
         index = Number(index);

         switch(command) {
             case 'Add':
                 arr.push(number);
                 break;
             case 'Remove':
                 for (let num of arr) {
                     if (num === number) {
                         arr.splice(arr.indexOf(number), 1);
                     }
                 }
                 break;
             case 'RemoveAt':
                 arr.splice(number, 1);
                 break;
             case 'Insert':
                 arr.splice(index, 0, number);
                 break;
             default:
                 console.log(`Invalid command!`)
         }
    }

    console.log(arr.join(' '))
}

solve(['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3']);

solve(['6 12 2 65 6 42',
        'Add 8',
        'Remove 12',
        'RemoveAt 3',
        'Insert 6 2'])