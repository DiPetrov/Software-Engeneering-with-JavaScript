function distinctArray(arr) {

    console.log(arr
                .filter((el, idx) => idx === arr.indexOf(el))  // keep first occurrence
                .join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);