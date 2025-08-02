function solve(arr) {

    let result = arr.slice().map(Number).sort(x => {
        if (x < 0) {
            return x;
        } else if (x === 0) {
            return x;
        } else if (x > 0) {
            return x;
        }
    });

    console.log(result.join('\n'));
}

solve(['7', '-2', '8', '9']);
// solve(['3', '-2', '0', '-1']);