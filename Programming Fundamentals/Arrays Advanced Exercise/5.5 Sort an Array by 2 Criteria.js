function sortArrayByTwoCriteria(arr) {

    // 1) sort by length, then alphabetically (case-insensitive)
    arr.sort((a, b) =>
        a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())
    );

    // 2) print each element on its own line
    console.log(arr.join('\n'));
}

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);