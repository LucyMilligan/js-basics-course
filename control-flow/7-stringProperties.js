// showProperties - pass in object
// show all properties that have values of type string

const book = {
    title: 'Harry Poter',
    releaseYear: 2001,
    rating: 4.6,
    author: 'JKRowling'
}
showProperties(book)

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}