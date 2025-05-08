// This is my Javascript Code
console.log("Hello World");

let something = 'Lucy';
something += 's'
console.log(something);

let person = {
    name: "lucy",
    favouriteColour: "teal"
}

console.log(person.name)
console.log(person['favouriteColour'])

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}

greet('Lucy', 'Milligan');