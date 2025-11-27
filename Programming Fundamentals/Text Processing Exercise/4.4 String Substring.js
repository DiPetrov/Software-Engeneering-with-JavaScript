function solve(check, input) {

   input = input.split(' ');
   let print = false;

    for (let i = 0; i < input.length; i++) {

        if (input[i].toLowerCase() === check.toLowerCase()) {
            console.log(check)
            print = true;
        }
    }

    if (print === false) {
        console.log(`${check} not found!`)
    }
}

solve('javascript',
        'JavaScript is the best programming language');

solve('python',
        'JavaScript is the best programming language');