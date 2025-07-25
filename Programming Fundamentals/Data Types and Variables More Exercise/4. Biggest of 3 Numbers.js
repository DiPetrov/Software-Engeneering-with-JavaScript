function biggestOf3Numbers(num1, num2, num3) {

    let biggestNumber = 0;

    if (num1 > num2 && num1 > num3) {
        biggestNumber = num1;
    }

    if (num2 > num1 && num2 > num3) {
        biggestNumber = num2;
    }

    if (num3 > num1 && num3 > num2) {
        biggestNumber = num3;
    }

    if (num1 === num2 && num1 === num3) {
        biggestNumber = num1;
    }

    console.log(biggestNumber);
}

biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130,
    5,
    99
);
biggestOf3Numbers(43,
    43.2,
    43.1
);
biggestOf3Numbers(2,
    2,
    2
);