function englishNameOfTheLastDigit(input) {

    let digit = String(input);
    let lastDigit = '';

    for (let i = 0; i < digit.length; i++) {
        lastDigit = digit[digit.length - 1];
    }

    switch(lastDigit) {
        case '1':
            console.log('one');
            break;
        case '2':
            console.log('two');
            break;
        case '3':
            console.log('three');
            break;
        case '4':
            console.log('four');
            break;
        case '5':
            console.log('five')
            break;
        case '6':
            console.log('six')
            break;
        case '7':
            console.log('seven')
            break;
        case '8':
            console.log('eight')
            break;
        case '9':
            console.log('nine')
            break;
        case '0':
            console.log('zero')
            break;
        default:
            console.log(`Invalid number!`)
    }
}

englishNameOfTheLastDigit(512);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);
englishNameOfTheLastDigit(1644);
englishNameOfTheLastDigit(1645);
englishNameOfTheLastDigit(1646);
englishNameOfTheLastDigit(1647);
englishNameOfTheLastDigit(1648);
englishNameOfTheLastDigit(1649);
englishNameOfTheLastDigit(1640);
englishNameOfTheLastDigit(280580274294109);