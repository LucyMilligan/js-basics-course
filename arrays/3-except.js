// function that takes an array and another array
// return an array with the values of the second array excluded

const numbers = [1, 2, 3, 4, 5, 6, 7, 2, 3];
const filteredNumbers = except(numbers, [1, 2, 3]);

console.log(filteredNumbers);

// function except(array, excluded) {
//     let output = array
//     for (let value of excluded) {
//         output = output.filter(n => n !== value)
//     }
//     return output
// }

function except(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element))
            output.push(element)
    };
    return output;
}