function  reverseString(input) {

    let reversedString = input;
    let currentElement = '';
    for (let i = reversedString.length - 1; i >= 0; i--) {
        currentElement += reversedString[i];

    }

    console.log(currentElement);
}

// reverseString('Hello');
// reverseString('SoftUni');
reverseString('1234');