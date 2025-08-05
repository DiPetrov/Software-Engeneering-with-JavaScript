function numbers(input) {

    let numbers = input.split(' ').map(Number);
    let sumAverageNumbers = 0;
    for (let number of numbers) {
        sumAverageNumbers += number;
    }

    let averageNumber = (sumAverageNumbers / numbers.length).toFixed(2);
    averageNumber = Number(averageNumber);

    let higherThanAverage = [];


    for (let number of numbers) {
        if (number > averageNumber) {
            higherThanAverage.push(number);
        }
    }

    if (higherThanAverage.length === 0) {
        console.log("No");
        return;
    }

    higherThanAverage.sort((a, b) => b - a);
    higherThanAverage.splice(5, higherThanAverage.length)
    console.log(higherThanAverage.join(' '));
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');