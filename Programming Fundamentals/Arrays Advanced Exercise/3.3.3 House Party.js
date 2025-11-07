function solve(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i++) {

        if (!newArr.includes(input[i].split(' ')[0])) {
            if (!input[i].includes('is no')) {

                newArr.push(input[i].split(' ')[0]);
            } else {
                console.log(`${input[i].split(' ')[0]} is not in the list!`);
            }
        } else  {
            if (input[i].includes('is no')) {
            newArr.splice(newArr.indexOf(input[i].split(' ')[0]), 1);
        } else {
                console.log(`${input[i].split(' ')[0]} is already in the list!`)
            }
        }
    }

    console.log(newArr.join('\n'));
}

solve(['Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!']);

solve(['Tom is going!',
        'Annie is going!',
        'Tom is going!',
        'Garry is going!',
        'Jerry is going!'])