function searchForNumber(arr1, arr2) {
// Two arrays in integers
// Second array has always exact 3 integers
// The numbers from the second array stand for:
    /* 1. First Number - amount of elements we need to take from the first array.
       2. Second Number - amount of elements we need to delete from the first array.
       3. Third Number - the number we search for after all the manipulations.
    */
// Print how many times this number occurs in our arrray.

    let newArray = arr1.slice(0, arr2[0]);
    newArray.splice(0, arr2[1]);
    let counter = 0;
    for (let number of newArray) {


        if (number === arr2[2]) {
            counter++;
        }
    }

    console.log(`Number ${arr2[2]} occurs ${counter} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7],

    [3, 1, 5])