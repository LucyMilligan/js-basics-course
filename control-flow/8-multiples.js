// sum - input a number
// gives the sum of the multiples of 3 and 5 up to the number

console.log(sum(10));

function sum(limit) {
    let total = 0;

    for (let i = 0; i <= limit; i++) 
        if ((i % 3 === 0) || (i % 5 === 0))
            total += i;
    
    return total
}