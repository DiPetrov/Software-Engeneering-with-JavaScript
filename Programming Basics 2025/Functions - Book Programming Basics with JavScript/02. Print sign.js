// function  solve([n]) {
//     function printSign(num) {
//         if (num === 0) {
//             console.log(`The number ${num} is zero.`);
//         } else if (num < 0) {
//             console.log(`The number ${num} is negative.`);
//         } else if (num > 0) {
//             console.log(`The number ${num} is positive.`)
//         }
//     }
//
//     const num = parseInt(n);
//     printSign(num);
// }
//
// solve([0]);



    function printSign(num) {

        const element = parseInt(num)

        if (element === 0) {
            console.log(`The number ${element} is zero.`);
        } else if (element < 0) {
            console.log(`The number ${element} is negative.`);
        } else if (element > 0) {
            console.log(`The number ${element} is positive.`)
        }
    }

    printSign([-2]);




