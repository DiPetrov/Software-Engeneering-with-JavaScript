function solve(input) {

    let result = [];
    let currentLetter = 0;

    for (let i = 1; i < input.length; i++) {

        if (input[i] >= 'A' && input[i] <='Z') {
            result.push(input.slice(currentLetter, i));
            currentLetter = i;
        }
    }
    result.push(input.slice(currentLetter));
    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');