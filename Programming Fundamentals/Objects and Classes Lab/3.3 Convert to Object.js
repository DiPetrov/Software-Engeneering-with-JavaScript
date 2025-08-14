function convertToObject(input) {

    let person = JSON.parse(input);

    for (let [keys, values] of Object.entries(person)) {
        console.log(`${keys}: ${values}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');