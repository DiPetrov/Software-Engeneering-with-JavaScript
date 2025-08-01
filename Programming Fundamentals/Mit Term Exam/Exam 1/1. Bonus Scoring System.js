function bonusScoringSystem(arr) {

    arr = arr.map(Number);
    let students = arr.shift();
    let lectures = arr.shift();
    let additionalBonus = arr.shift();
    let totalBonus = 0;
    let maxBonusPoints = 0;
    let bestStudentAttendance = 0;
    let currentAttendance = 0;

    for (let i = 0; i < students; i++) {

        totalBonus = Math.ceil((arr[i] / lectures) * (5 + additionalBonus));
        currentAttendance = arr[i];

        if (totalBonus >= maxBonusPoints) {
            if (totalBonus > maxBonusPoints) {
                maxBonusPoints = totalBonus;
                bestStudentAttendance = currentAttendance;
            } else {
                if (currentAttendance > bestStudentAttendance) {
                 bestStudentAttendance = currentAttendance;
                }
            }

        }
    }

    console.log(`Max Bonus: ${maxBonusPoints}.`);
    console.log(`The student has attended ${bestStudentAttendance} lectures.`)

}

bonusScoringSystem(['5',  '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);