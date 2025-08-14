function convertToJSON(firstName, lastName, hairColor) {

    let person = {};

    person.name = firstName;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let personToJSON = JSON.stringify(person);
    console.log(personToJSON);
}

convertToJSON('George', 'Jones', 'Brown');