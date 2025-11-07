function charactersInRange(a, b) {
    let result = " ";

    function printASCII(x, y) {
        let char1 = x.charCodeAt(0);
        let char2 = y.charCodeAt(0);

        if (char1 > char2) {
            for (let i = char2 + 1; i < char1; i++) {
                result +=  String.fromCharCode(i) + " ";
            }
        } else {
            for (let i = char1 + 1; i < char2; i++) {
                result += String.fromCharCode(i) + " ";
            }
        }
    }

    printASCII(a, b);
    console.log(result);
}

// charactersInRange('a', 'd');
// charactersInRange('#', ':');
charactersInRange('C', '#');