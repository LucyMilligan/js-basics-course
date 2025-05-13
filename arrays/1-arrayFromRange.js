// function that returns an array from a given range

const numbers = arrayFromRange(3, 10)
console.log(numbers)

function arrayFromRange(min, max) {
    const newArray = [];
    for (let i = min; i <= max; i++)
        newArray.push(i);
    return newArray;
};