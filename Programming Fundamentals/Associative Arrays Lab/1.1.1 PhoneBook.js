function phoneBook(arr) {
    let parsedArr = arr.map(item => item.split(' '));

    let phoneBook = Object.fromEntries(parsedArr);

    console.log(Object.entries(phoneBook)
        .map(entry => entry.join(' -> '))
        .join('\n'));
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);