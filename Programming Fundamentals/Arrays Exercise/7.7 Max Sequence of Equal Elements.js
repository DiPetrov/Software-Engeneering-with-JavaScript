function maxSequence(arr) {
    // Variables to track the longest sequence
    let maxLength = 1;        // The longest sequence length found so far
    let maxStartIndex = 0;    // The starting index of the longest sequence

    // Variables to track the current sequence
    let currentLength = 1;    // The length of the current sequence
    let currentIndex = 0;     // The starting index of the current sequence

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // If the current number is the same as the previous one
        if (arr[i] === arr[i - 1]) {
            currentLength++;  // We increase the length of the current sequence
        } else {
            // If numbers are different, we start a new sequence
            currentLength = 1;
            currentIndex = i;
        }

        // Check if the current sequence is longer than the max sequence
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxStartIndex = currentIndex;
        }
    }

    // Build the result by repeating the number maxLength times
    let result = '';
    for (let i = 0; i < maxLength; i++) {
        result += arr[maxStartIndex] + ' ';
    }

    // Print the result
    console.log(result.trim());
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);