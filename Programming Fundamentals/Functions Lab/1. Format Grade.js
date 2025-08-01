function formatGrade(grade) {
  if (grade < 3.0) {
    console.log(`Fail (${Math.floor(grade.toFixed(2))})`);
  } else if (grade >= 3.0 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
