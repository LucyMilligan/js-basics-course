// // This is my Javascript Code
// console.log("Hello World");

// //variables
// let something = 'Lucy';
// something += 's'
// console.log(something);

// //objects
// let person = {
//     name: "lucy",
//     favouriteColour: "teal"
// }

// console.log(person.name)
// console.log(person['favouriteColour'])

// //functions
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName)
// }

// greet('Lucy', 'Milligan');

// function square(number) {
//     return number * number
// }

// let number = square(2)
// console.log(number)

// // ternary operator
// let points = 110
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type)

// // OR operator to provide default values
// let userColour = undefined;
// let defaultColour = 'blue';
// let currentColour = userColour || defaultColour

// console.log(currentColour)

// //if statements
// let hour = 22

// if (hour >= 6 && hour < 12)
//     console.log('Good Morning!')
// else if (hour >= 12 && hour < 18)
//     console.log('Good Afternoon!')
// else 
//     console.log('Good Evening!')

// //switch case
// let colour = "black"
// switch (colour) {
//     case 'red':
//     case 'blue':
//     case 'yellow':
//         console.log('primary colour')
//         break;
//     default:
//         console.log('not a primary colour')
// }

// //for loop to print odd numbers in reverse order
// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i);
// }

// //while loop to print odd numbers
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !==0) console.log(i);
//     i++;
// }

// //do-while loop
// let variable = something;
// do {
//     statements
// } while (condition);

// //for-in loop
// const person = {
//     name: 'Lucy',
//     age: 20
// };
// for (let key in person) {
//     console.log(key, person[key]);
// };

//for-of loop
const colours = ['red', 'blue', 'green'];
for (let colour of colours)
    console.log(colour);