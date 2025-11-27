let bigBinarySearch = [];
for (let i = 0; i < 100000000; i++) {
    bigBinarySearch.push(i);
}

console.log(bigBinarySearch)

function binarySearch(arr, item) {

    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        if (guess === item) {
            console.log(mid)
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    console.log('None');
    return 'None';
}

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
binarySearch(bigBinarySearch, 777777);
// binarySearch([150, 160, 180, 200, 300, 500, 700], 105);



