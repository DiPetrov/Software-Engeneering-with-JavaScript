function nextDay(year, month, day) {
    // Create a Date object (month is 0-based, so subtract 1)
    let date = new Date(year, month - 1, day);

    // Add one day
    date.setDate(date.getDate() + 1);

    // Extract new date components
    let nextYear = date.getFullYear();
    let nextMonth = date.getMonth() + 1;  // Add 1 because months are 0-based
    let nextDay = date.getDate();

    // Return in desired format
    return `${nextYear}-${nextMonth}-${nextDay}`;
}

// Examples:
console.log(nextDay(2016, 9, 30));  // Output: 2016-10-1
// console.log(nextDay(2020, 3, 24));  // Output: 2020-3-25