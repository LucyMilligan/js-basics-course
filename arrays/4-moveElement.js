// function to move an element in an array
// raise an error if the offset is invalid (Invalid offset.) - console.error('Invalid offset.')
// returns a new array with items reordered

const numbers = [1, 2, 3, 4, 5, 6, 7];
const output = move(numbers, 5, -3)

console.log(output);

// function move(array, index, offset) {
//     let outputArray = [...array]
//     const element = outputArray.splice(index, 1)[0]
//     outputArray = [...outputArray.slice(0, index+offset), element, ...outputArray.slice(index+offset)];
//     if (index + offset >= array.length || offset < -index)
//         console.error('Invalid offset.')
//     else return outputArray
// }

function move(array, index, offset) {
    const position = index + offset
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    let outputArray = [...array]
    const element = outputArray.splice(index, 1)[0]
    outputArray.splice(position, 0, element)
    return outputArray
}