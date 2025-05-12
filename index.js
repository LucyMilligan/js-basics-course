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

// //for-of loop
// const colours = ['red', 'blue', 'green'];
// for (let colour of colours)
//     console.log(colour);

// //methods
// const something = {
//     key1: value1,
//     key2: function() {
//         statements/logic
//     }
// };

// something.key2()

// //factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw')
//         }
//     };
// }

// const circle1 = createCircle(1);
// circle1.draw()
// console.log(circle1.radius)


// // Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1)
// circle.draw()
// console.log(circle.radius)


// // dynamic objects
// const circle = {
//     radius: 1
// }

// circle.colour = "red"
// delete circle.colour
// console.log(circle)

// //Date objects
// const now = new Date()
// const someDate = new Date(2025, 4, 12)

// console.log(now)
// console.log(someDate)