function equalSums(arr) {
    let foundIndex = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // Calculate left sum (all elements before i)
        for (let left = 0; left < i; left++) {
            leftSum += arr[left];
        }

        // Calculate right sum (all elements after i)
        for (let right = i + 1; right < arr.length; right++) {
            rightSum += arr[right];
        }

        // Check if they are equal
        if (leftSum === rightSum) {
            console.log(i);
            foundIndex = true;
            break;
        }
    }

    if (!foundIndex) {
        console.log('no');
    }
}

// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);