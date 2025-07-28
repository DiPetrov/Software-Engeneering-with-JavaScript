function solve(arr) {
    let newArr = arr.map(Number);

    let firstNumber = newArr.shift();
    let secondNumber = newArr.pop();

    console.log(firstNumber + secondNumber);

}

solve(['20', '30', '40']);