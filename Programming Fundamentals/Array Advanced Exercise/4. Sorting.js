function sorting(arr) {

    let sortedArray = arr.sort((a, b) => b - a);
    let middle = Number(sortedArray.length / 2);
    let result = [];

    for (let i = 0; i < middle; i++) {
        let biggest = sortedArray.shift();
        let smallest = sortedArray.pop();
        result.push(biggest);
        result.push(smallest);
    }

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);