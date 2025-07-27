function numberModification(a) {
    function numberCheck(x) {
        let stringNumber = String(x);
        let sum = 0;

        for (let i = 0; i < stringNumber.length; i++) {
            let currentNumber = Number(stringNumber[i]);
            sum += currentNumber;
        }

        if (sum / stringNumber.length < 5) {
            return true;
        } else {
            return x;
        }
    }

    let check = numberCheck(a);

    function modification(x) {
            let sum = 0;
            let stringNumber = String(x);

            for (let i = 0; i < stringNumber.length; i++) {
                let currentNumber = Number(stringNumber[i]);
                sum += currentNumber;

                if (i === stringNumber.length - 1) {
                    if (sum / stringNumber.length < 5) {
                        stringNumber += '9';
                    } else {
                        return stringNumber;
                    }
                }
            }
    }

    let finalResult = modification(a);

    if (check !== true) {
        return check;
    } else {
        return finalResult;
    }
}

numberModification(101);
numberModification(5835);