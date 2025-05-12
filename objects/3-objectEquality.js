// create a function to check if 2 objects are equal (properties)
// create a function to check if 2 objects are the same (i.e. referencing the same object)

const address1 = new Address('d', 'g', 'f');
const address2 = new Address('d', 'e', 'f');
let address3 = address1;

function Address(street, city, postcode) {
    this.street = street,
    this.city = city,
    this.postcode = postcode;
}

//check if properties of objects are the same
// function areEqual(address1, address2) {
//     let equal = true
//     for (let key in address1) {
//         if (key in address2)
//             if (address1[key] !== address2[key]) {
//                 equal = false
//                 break;
//         }
//     }
//     return equal;
// }

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.postcode === address3.postcode;
}

console.log(areEqual(address1, address2))


//check if objects are the same (in memory)
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areSame(address1, address2))
console.log(areSame(address1, address3))