function phoneBook(arr) {
    let phoneBook = {};
    for (let item of arr) {
        let [name, phone] = item.split(' ');

        phoneBook[name] = phone;
    }

    /* Variant 1 */
    // for (let [name, phone] of Object.entries(phoneBook)) {
    //     console.log(name, '->' ,phone);
    // }

    /* Variant 2 */
    // for (let entry of Object.entries(phoneBook)) {
    //     console.log(entry.join(' -> '));
    // }

    /* Variant 3 */
    let output = Object.entries(phoneBook)
        .map(entry => entry.join(' -> '))
        .join('\n');
    console.log(output)
}

phoneBook(['Tim 0834212554',
            'Peter 0877547887',
            'Bill 0896543112',
            'Tim 0876566344']);