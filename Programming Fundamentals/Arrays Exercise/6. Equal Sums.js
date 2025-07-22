function equalSums(arr) {
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
    }

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
        leftSum += arr[i];
    }

    console.log('no');
}

equalSums([1, 2, 3, 3]);
