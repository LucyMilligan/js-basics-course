// takes an array and searchElement and counts the number of times the
//search element appears in the array
//start simply then use the reduce method

const numbers = [1, 2, 3, 1, 3];
const count = countOccurences(numbers, 3);
console.log(count);

// function countOccurences(array, searchElement) {
//     let count = 0
//     for (let element of array) {
//         if (element === searchElement)
//             count++;
//     }
//     return count;
// }


function countOccurences(array, searchElement) {
    return totalCount = array.reduce((accumulator, currentValue) => {
        const occurence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurence
    }, 0);
}
