// initialise an address object using a factory and then constructor function
// let address = {
//  street: 'a',
//  city: 'b',
//  postcode: 'c'}


// factory function
function createAddress(street, city, postcode) {
    return {
        street,
        city,
        postcode
    };
}

const myAddress = createAddress('a', 'b', 'c')
console.log(myAddress)

// constructor function
function Address(street, city, postcode) {
    this.street = street;
    this.city = city;
    this.postcode = postcode;
}

const myOtherAddress = new Address('d', 'e', 'f')
console.log(myOtherAddress)

