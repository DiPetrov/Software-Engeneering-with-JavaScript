function maxSequence(arr) {

    let maxLength = 1;
    let maxStartIndex = 0;

    let currentLength = 1;
    let currentIndex = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentLength++;
        } else {
            currentLength = 1;
            currentIndex = i;
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStartIndex = currentIndex;
        }
    }


    let result = [];
    for (let i = 0; i < maxLength; i++) {
        result.push(arr[maxStartIndex]);
    }
    console.log(result.join(' '));

}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
