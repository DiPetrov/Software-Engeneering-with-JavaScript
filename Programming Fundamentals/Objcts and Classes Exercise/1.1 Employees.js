function employees(input) {

   let person = {}

for (let i = 0; i < input.length; i++) {
    let currentElement = input[i];
    let stringLength = 0;
    for (let j = 0; j < currentElement.length; j++) {
        stringLength++;
    }
    person.name = currentElement;
    console.log(`Name: ${person.name} -- Personal Number: ${stringLength}`);
 }

}

employees([
            'Silas Butler',
            'Adnaan Buckley',
            'Juan Peterson',
            'Brendan Villarreal']);