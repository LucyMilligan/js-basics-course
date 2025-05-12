// create an address object with 3 properties - street, city, zipCode
// showAddress function
    // shows all properties of the object along with their value


const address = {
    street: "Maple Avenue",
    city: "London",
    postCode: "LD12 13A"
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address)