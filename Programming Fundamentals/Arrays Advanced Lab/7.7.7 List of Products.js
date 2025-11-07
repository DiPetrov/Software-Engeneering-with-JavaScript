function solve(input) {
    let newArr = [];

    input = input.sort();
    let counter = 0;
    for (let fruit of input) {
        counter++;
        newArr.push(`${counter}.${fruit}`)
    }

    console.log(newArr.join('\n'));
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);