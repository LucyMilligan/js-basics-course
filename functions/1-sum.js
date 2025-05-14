// sum(1, 2, 3, 4) - get 10
//can accept a varying amount of arguments
//modify so that it can accept an array (Array.isArray())

// function sum(...nums) {
//     return nums.reduce((a, b) => a + b);
// }

function sum(...nums) {
    if (nums.length === 1 && Array.isArray(nums[0]))
        nums = [...nums[0]];

    return nums.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]))