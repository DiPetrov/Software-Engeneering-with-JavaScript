function sorting(arr) {

    // 1️⃣  biggest-to-smallest ordering
    arr.sort((a, b) => b - a);
    let result = [];
// 2️⃣  build result with no extra indices
    while (arr.length) {          // runs until the working array is empty
        result.push(arr.shift()); // biggest remaining
        if (arr.length)           // guard against odd-length inputs
            result.push(arr.pop()); // smallest remaining
    }

// 3️⃣  output
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);