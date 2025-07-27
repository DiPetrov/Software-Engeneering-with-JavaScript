function perfectNumber(a) {
 // 1. Write a program that checks if a number is a perfect number - positive integer that is equal to the sum of its proper positive divisors.
 // 2. The sum has to be calculated EXCLUDING the number ITSELF! - aliquot sum.

    function numberCheck(x) {
        let divisorSum = 0;
        for (let i = 1; i < x; i++) {
            let currentNumber = i;

            if (x % i == 0) {
                divisorSum += i;
            }
        }

        if (x === divisorSum) {
            return 'We have a perfect number!';
        } else {
            return "It's not so perfect.";
        }
    }

    let result = numberCheck(a);
    console.log(result)
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);