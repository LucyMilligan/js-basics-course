// returns the largest number in an array
// return undefined if the number is not in the array
//challenge - use reduce method

const numbers = [-1, -2, -10]
const max = getMax(numbers)
console.log(max);

function getMax(array) {
    if (array.length === 0)
        return undefined;

    // let maxValue = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > maxValue)
    //         maxValue = array[i];
    
    // return maxValue

    return maxValue = array.reduce((accumulator, currentValue) => {
        //essentially:
            // accumulator set to first value of array
            // if current value greater than accumulator
            // set accumulator to equal currentValue, otherwise don't change its value
        return (currentValue > accumulator) ? currentValue : accumulator
    });

    // // shortest way of writing it (don't need the return keyword as its on one line)
    // return array.reduce((a, b) => (a > b) ? a : b)
}