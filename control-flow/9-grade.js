// takes an array of marks and returns grade
// calculates average grade of a student
// then calculates the grade
    // 0-59: F
    // 60-69: D
    // 70-79: C
    // 80-89: B
    // 90-100: A

const marks = [55, 58, 98]
console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let totalMarks = 0;

//     for (let mark of marks)
//         totalMarks += mark;

//     let averageMark = totalMarks / marks.length;

//     if (averageMark < 60) return 'F';
//     if (averageMark < 70) return 'D';
//     if (averageMark < 80) return 'C';
//     if (averageMark < 90) return 'B';
//     return 'A';
// }

function calculateGrade(marks) {
    const average = calculateAverage(marks)

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;

    for (let value of array)
        sum += value;

    return sum / array.length;
}
