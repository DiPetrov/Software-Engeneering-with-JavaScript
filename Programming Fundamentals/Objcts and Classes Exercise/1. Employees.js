function solve(arr) {

    let result = [];
    for (let employee of arr) {
        let employeeObj = {
            "name": employee,
            "personalNumber": employee.length
        };
        result.push(employeeObj);
    }
    result.forEach((employee) => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)});
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);