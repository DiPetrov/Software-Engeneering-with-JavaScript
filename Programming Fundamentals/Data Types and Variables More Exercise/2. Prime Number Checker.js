function primeNumberChecker(num) {
        if (num < 2) {
            console.log('false')
            return;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log(false)
                return;
            }
        }

    console.log('true')
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);




