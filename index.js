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


// //Finding elements of reference type arrays
// const courses = [
//     {id: 2, name: 'a'},
//     {id: 3, name: 'c'},
// ];

// const aCourse = courses.find(function(course) {
//     return course.name === 'a'
// });


// // arrow functions
// const courses = [
//     {id: 2, name: 'a'},
//     {id: 3, name: 'c'},
// ];

// const aCourse = courses.find(course => course.name === 'a');
// console.log(aCourse)

// //iterating arrays
// const numbers = [1, 2, 3, 4]

// numbers.forEach(number => console.log(number))


// //sorting arrays
// const numbers = [4, 6, 2, 78, 35, 3]
// numbers.sort()
// console.log(numbers)

// const courses = [
//     { id: 1, name: 'Node.js' },
//     { id: 2, name: 'javascript' }
// ];

// courses.sort((a, b) => {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// })

// console.log(courses)

// // testing elements of an array
// const numbers = [1, -2, 3, 4, -5]

// const allPositive = numbers.every(function(n) {
//     return n >= 0}
// );

// console.log(allPositive)

// //mapping elements of an array
// const numbers = [1, 2, 3]
// const objs = numbers
//     .map(n => ({ value: n }))
//     .filter(obj => obj.value > 1)

// const items = numbers.map(n => '<li>' + n + '<li>')
// console.log(items)
// console.log(objs)

// //reducing an array
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum)