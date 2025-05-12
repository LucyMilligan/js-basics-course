// takes an array and returns the number of truthy items

const array = [0, 1, 2, 3, null, "hello"]
console.log(countTruthy(array))

function countTruthy (array) {
    let count = 0;
    for (let item of array)
        if (item)
            // count += 1;
            count ++;
    return count;
}