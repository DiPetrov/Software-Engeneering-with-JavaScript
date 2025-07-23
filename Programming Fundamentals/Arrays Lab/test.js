function solve(arr) {

    arr.unshift(arr[arr.length - 2])

    console.log(arr)

}

solve(['Banana', 'Orange', 'Coconut', 'Apple',]);