// copy code from arrays exerise 5 (countOccurences)
// atm its assuming valid array - need to modify function to add error handling
// throw exception is array is not a valid array
// wrap invokation in try catch block (log in console)

const numbers = false;

try {
const count = countOccurences(numbers, 3);
console.log(count);
}
catch (e) {
    console.log(e.message)
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) 
        throw new Error('Invalid Array.')
    
    return totalCount = array.reduce((accumulator, currentValue) => {
        const occurence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurence
    }, 0);
}


