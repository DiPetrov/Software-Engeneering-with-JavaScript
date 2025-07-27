function passwordValidator(a) {
    function betweenCharacters(x) {
        if (x.length >= 6 && x.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function lettersAndNumbers(x) {
        for (let el of x) {
            let currentElement = el.charCodeAt(0);

            let isDigit = currentElement >= 48 && currentElement <= 57;
            let isUpper = currentElement >= 65 && currentElement <= 90;
            let isLower = currentElement >= 97 && currentElement <= 122;

            if (!(isDigit || isUpper || isLower)) {
                return false;
            }
        }
        return true;
    }

    function atLeastTwoDigits(x) {
        let digitsAmount = 0;
        for (let i = 0; i < x.length; i++) {
            let currentElement = x[i];

            if (currentElement >= '0' && currentElement <= '9') {
                digitsAmount++;
                if (digitsAmount === 2) {
                    return true;
                }
            }
        }
        return false;

        if (digitsAmount >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let firstCheck = betweenCharacters(a);
    let secondCheck = lettersAndNumbers(a);
    let thirdCheck = atLeastTwoDigits(a);

    if (firstCheck === true && secondCheck === true && thirdCheck === true) {
        console.log("Password is valid");
    }

    if (firstCheck !== true) {
            console.log("Password must be between 6 and 10 characters");
        }

    if (secondCheck !== true) {
            console.log("Password must consist only of letters and digits");
        }

    if (thirdCheck !== true) {
            console.log("Password must have at least 2 digits");
        }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');