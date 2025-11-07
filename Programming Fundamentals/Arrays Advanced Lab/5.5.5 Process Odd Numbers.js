function solve(input) {

    input = input.map(x => x * 2)
                 .filter((value, index) => index % 2 !== 0)
                 .reverse();

    console.log(input.join(' '));
}

// solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);