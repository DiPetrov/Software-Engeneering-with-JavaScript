function nxnMatrix(num) {
    function matrix(x) {
        for (let i = 0; i < x; i++) {
            let line = "";
            for (let j = 0; j < x; j++) {
                line += num + ' ';
            }
            console.log(line)
        }
    }

    let result = matrix(num);
    console.log(result);
}

// nxnMatrix(3);
nxnMatrix(7);