function negativeOrPositiveNumber(arr) {
    let newArr= [];
    arr = arr
        .slice()
        .map(Number);

    for (let number of arr) {
        if (number < 0) {
        newArr.unshift(number);
        } else if (number === 0 || number > 0) {
        newArr.push(number);
        }
    }

    console.log(newArr.join('\n'))
}

negativeOrPositiveNumber(['7', '-2', '8', '9']);