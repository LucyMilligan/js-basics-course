//log prime numbers up to a limit

showPrimes(15)

// function showPrimes(limit) {
//     for (let num = 2; num <= limit; num++) {
//         let isPrime = true
//         for (let factor = 2; factor < num; factor++) {
//             if (num % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         (isPrime) ? console.log(num) : undefined;
//     }
// }

function isPrimeNum(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}

function showPrimes(limit) {
    for (let num = 2; num <= limit; num++)
        if (isPrimeNum(num)) console.log(num);
}