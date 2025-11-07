function solve(input) {

    let newArr = input.split(' ').map(Number);
    let arrSum = 0;

    for (let num of newArr) {
        arrSum += num;
    }

    arrSum /= newArr.length;
    newArr.sort((a, b) => b - a);
    let result = [];

    for (let num of newArr) {

        if (num > arrSum) {
            if (result.length < 5) {
                result.push(num);
            }
        }
    }

    if (result.length === 0) {
        console.log('No');
    } else {
        console.log(result.join(' '));
    }
}

solve('10 20 30 40 50');
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51');
solve('1');
solve('-1 -2 -3 -4 -5 -6')