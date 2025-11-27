function solve(input) {

    input = input.split('');
    let rightWord = '';
    let leftWord = '';
    let divider = input.length / 2 + 1;

    for (let i = 0; i < input.length / 2; i++) {
        let rightSide = input[input.length - i - 1];
        rightWord += rightSide;
        let leftSide = input[input.length - i - divider];
        leftWord += leftSide
    }

    console.log(leftWord);
    console.log(rightWord);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');