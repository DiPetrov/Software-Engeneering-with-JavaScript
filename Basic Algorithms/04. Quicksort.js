function quicksort(array) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (array.length < 2) {
        return array;
    } else {
        let pivot = array[0];
        let less = [];
        let greater = [];

        // Split the array (starting from index 1)
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            if (current <= pivot) {
                less.push(current);
            } else {
                greater.push(current);
            }
        }

        // Recursive case: sort sub-arrays and combine
        return quicksort(less).concat([pivot], quicksort(greater));
    }
}

console.log(quicksort([10, 5, 2, 3]));