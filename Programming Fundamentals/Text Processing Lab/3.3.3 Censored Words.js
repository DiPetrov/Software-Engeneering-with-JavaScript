function solve(text, check) {

    let replacedWord = '*'.repeat(check.length);
    let newStr = '';

    while(text.includes(check)) {

        newStr = text.replaceAll(check, replacedWord);
        break;
    }

    console.log(newStr)
}

solve('A small sentence with some words', 'small');