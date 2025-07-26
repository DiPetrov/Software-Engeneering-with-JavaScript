function palindromeIntegers(arr) {
    function palindromeCheck(x) {
        for (let i = 0; i < x.length; i++) {
            let currentInteger = String(x[i]);
            let isTrue = true;

            for (let j = 0; j < currentInteger.length; j++) {
                let currentString = String(currentInteger[j]);
                let currentStringReversed = String(currentInteger[currentInteger.length - 1 - j]);

                if (currentString === currentStringReversed) {
                    isTrue = true;
                } else {
                    isTrue = false;
                    console.log('false')
                    break;
                }
            }

            if (isTrue) {
                console.log('true');
            }

        }
    }

    let result = palindromeCheck(arr);
}

// palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);