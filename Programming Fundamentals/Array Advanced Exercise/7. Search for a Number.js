function searchForNumber(arr1, arr2) {
    let workingArray = arr1.slice();
    let end = arr2[0];
    let sliceArr = workingArray.splice(0, end);
    end = arr2[1];
    sliceArr.splice(0, end);
    let n = arr2[2];
    resultArray = sliceArr.filter(x => x === n);
    console.log(`Number ${n} occurs ${resultArray.length} times.`)

}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);