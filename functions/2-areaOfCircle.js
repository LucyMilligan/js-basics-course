// circle object using object literal syntax
// have a radius property that you can read or write to (e.g. circle.radius = 4)
// area property that is read only (circle.area)

const circle = {
    radius: undefined,
    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

circle.radius = 5
console.log(circle.radius)
console.log(circle.area)