function solve(input) {

    let schoolGrades = new Map();

    for (let i = 0; i < input.length; i++) {
        let [currentName, ...rest] = input[i].split(' ');
        rest = rest.map(Number);

        if (schoolGrades.has(currentName)) {
            schoolGrades.get(currentName).push(...rest);
        } else {
            schoolGrades.set(currentName, [...rest]);
        }
    }

    for (let students of schoolGrades) {
        let sum = 0;
        for (let grade of students[1]) {
            sum += grade
        }
        sum /= students[1].length;
        schoolGrades.set(students[0], sum);
    }

    let sorted = Array.from(schoolGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (let student of sorted) {
        console.log(`${student[0]}: ${student[1].toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);