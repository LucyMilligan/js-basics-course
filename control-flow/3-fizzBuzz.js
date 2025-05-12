// if number divisible by 3 return 'Fizz', 
// if divisible by 5 'Buzz'
// if divisible by 3 and 5 return 'FizzBuzz'
// not divisible by either return input
// return 'Not a number' if input is not a number

function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0)) 
        return 'FizzBuzz';

    if (input % 3 === 0) 
        return 'Fizz';

    if (input % 5 === 0) 
        return 'Buzz';

    return input;
}

console.log(fizzBuzz(8))