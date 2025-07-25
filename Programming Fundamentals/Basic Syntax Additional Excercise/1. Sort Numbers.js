function  sortNumbers(num1, num2, num3) {

    let smallestNumber = 0;
    let middleNumber = 0;
    let biggestNumber = 0;

    if (num1 === num2 && num1 === num3) {
        biggestNumber = num1;
        smallestNumber = num1;
        biggestNumber = num1;
    }



    if (num1 === 0 && num2 === 0 && num3 === 0) {
        smallestNumber = 0;
        middleNumber = 0;
        biggestNumber = 0;
    } else if (num1 === 0 & num2 === 0) {
        biggestNumber = num3;
        middleNumber = num2;
        smallestNumber = num1;
    } else if (num1 === 0 & num3 === 0) {
        biggestNumber = num2;
        middleNumber = num1;
        smallestNumber = num3;
    } else if (num2 === 0 && num3 === 0) {
        biggestNumber = num1;
        middleNumber = num2;
        smallestNumber = num3;
    }



    if (num1 > num2 && num1 > num3) {
        biggestNumber = num1;
        if (num2 === num3) {
            middleNumber = num2;
            smallestNumber = middleNumber;
        }
    }

    if (num2 > num1 && num2 > num3) {
        biggestNumber = num2;
        if (num1 === num3) {
            middleNumber = num1;
            smallestNumber = middleNumber;
        }
    }

    if (num3 > num1 && num3 > num2) {
        biggestNumber = num3;
        if (num1 === num2) {
            middleNumber = num1;
            smallestNumber = middleNumber;
        }
    }



    if (num1 < num2 && num1 < num3) {
        smallestNumber = num1;
    }

    if (num2 < num3 && num2 < num1) {
        smallestNumber = num2;
    }

    if (num3 < num2 && num3 < num1) {
        smallestNumber = num3;
    }



    if (num1 > num2 && num1 < num3) {
        middleNumber = num1;
    } else if (num1 < num2 && num1 > num3) {
        middleNumber = num1;
    }

    if (num2 > num1 && num2 < num3) {
        middleNumber = num2;
    } else if (num2 < num1 && num2 > num3) {
        middleNumber = num2;
    }

    if (num3 > num1 && num3 < num2) {
        middleNumber = num3;
    } else if (num3 < num1 && num3 > num2) {
        middleNumber = num3;
    }





    console.log(biggestNumber);
    console.log(middleNumber);
    console.log(smallestNumber);
}

// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);
// sortNumbers(7, 6, 5);
sortNumbers(2, 2, 3);
sortNumbers(3,2,2)
sortNumbers(2,3,2);
