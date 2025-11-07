function adressBook(data) {
    let adressBook = {};

    for (let entry of data) {
        let parsedData = entry.split(':');

        [fullName, adress] = parsedData;

        adressBook[fullName] = adress;

    }

let adressBookEntries = Object.entries(adressBook);

    adressBookEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second[0];

        return firstKey.localeCompare(secondKey);
    });

    for (let [fullName, adress] of adressBookEntries) {
        console.log(`${fullName} -> ${adress}`);
    }
}

adressBook(['Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd']);