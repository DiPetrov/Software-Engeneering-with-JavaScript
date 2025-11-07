function solve(input) {

    let firstHalf = '';
    let secondHalf = '';

    for (let i = 0; i < Math.floor(input.length / 2); i++) {
        firstHalf += input[i];
        secondHalf += input[input.length - 1 - i];
    }

    let firstHalfNew = '';

   for (let i = 0; i < firstHalf.length; i++) {
       firstHalfNew += firstHalf[firstHalf.length - 1 - i];
   }

    console.log(firstHalfNew);
    console.log(secondHalf);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');