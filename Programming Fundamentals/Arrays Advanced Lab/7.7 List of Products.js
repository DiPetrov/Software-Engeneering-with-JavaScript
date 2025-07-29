function listOfProduct(arr) {


    arr.sort();
    let counter = 0;
    let newArr = [];
    for (let fruit of arr) {
        counter++;
        newArr.push(fruit);
        console.log(`${counter}.${fruit}`);
    }
}
listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);