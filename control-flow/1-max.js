// function - takes 2 numbers and returns the maximum of the two

function maxNumber(num1, num2) {
    // if (num1 > num2) return num1;
    // return num2;

    return (num1 > num2) ? num1 : num2;
}

const maxNum = maxNumber(1000, 200)
console.log(maxNum)