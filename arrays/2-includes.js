// function like the includes method
// takes an array and a searchElement, returning a boolean

const numbers = [1, 2, 3, 4];
console.log(includes(numbers, 2));

function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement)
            return true;
    }
    return false;
}