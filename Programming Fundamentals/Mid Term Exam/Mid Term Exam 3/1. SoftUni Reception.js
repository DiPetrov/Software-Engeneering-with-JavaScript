function softUniReception(input) {

    let studentsAmount = Number(input[3]);
    let hours = 0;
    let totalAnsweredStudents = 0;
    let isTrue = true;
    let studentsAnsweredPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);


    while(isTrue) {

        if (studentsAmount === 0) {
            console.log(`Time needed: 0h.`);
            return;
        }

        hours++;

        if (hours % 4 !== 0) {
            totalAnsweredStudents += studentsAnsweredPerHour;

            if (totalAnsweredStudents >= studentsAmount) {
                isTrue = false;
                console.log(`Time needed: ${hours}h.`);
                return;
            }
        }
    }
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1', '2', '3', '45']);