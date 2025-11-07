function solve(input) {
    let adressBook = {};

    for (let item of input) {
        let [name, adress] = item.split(':');

        adressBook[name] = adress;
    }

    let entries = Object.entries(adressBook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    let sorted = {};

    for (let [name, adress] of entries) {
        sorted[name] = adress;
    }

    for (let [name, adress] of Object.entries(sorted)) {
        console.log(name, '->', adress)
    }
}

solve(['Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd']);