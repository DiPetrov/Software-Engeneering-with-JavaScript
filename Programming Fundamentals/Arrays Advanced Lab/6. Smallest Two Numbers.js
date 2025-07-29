function smallestTwoNumbers(arr) {

    // This algorithm muss be learned - sorting !
    let sorted = arr.sort((x, y) => x - y);

    let firstTwo = sorted.slice(0, 2);

    console.log(firstTwo.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);