function firstAndLastKNumbers(arr) {

    function arrayCut(x) {
        let cut = arr.shift();

        let newArr = arr.slice(0, cut);
        let newArr2 = arr.slice(arr.length - cut);

        console.log(newArr.join(' '));
        console.log(newArr2.join(' '));
    }

    arrayCut(arr);
}

firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);