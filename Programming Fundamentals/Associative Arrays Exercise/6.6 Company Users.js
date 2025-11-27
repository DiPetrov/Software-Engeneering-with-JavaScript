function solve(input) {
    let companyUsers = new Map();

    for (let element of input) {
        let [company, employeeID] = element.split(' -> ');

        if (companyUsers.has(company)) {
            if (!companyUsers.get(company).includes(employeeID)) {
                companyUsers.get(company).push(employeeID);
            }
        } else {
            companyUsers.set(company, [employeeID]);
        }
    }

    let sorted = Array.from(companyUsers).sort((a, b) => a[0].localeCompare(b[0]));

    for (let company of sorted) {
        console.log(company[0]);
        for (let employee of company[1]) {
            console.log(`-- ${employee}`);
        }
    }
}

// solve(['SoftUni -> AA12345',
//         'SoftUni -> BB12345',
//         'Microsoft -> CC12345',
//         'HP -> BB12345']);

solve(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);