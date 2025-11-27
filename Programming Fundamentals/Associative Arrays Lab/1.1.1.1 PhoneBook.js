function solve(input) {
    let phoneBook = new Map;

    for (let people of input) {
        let [person, phoneNumber] = people.split(' ');

        if (person in phoneBook) {
            phoneBook[person] = phoneNumber;
        }
        phoneBook[person] = phoneNumber;
    }

    for (let [key, value] of  Object.entries(phoneBook)) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

// solve(['George 0552554',
//     'Peter 087587',
//     'George 0453112',
//     'Bill 0845344']);
