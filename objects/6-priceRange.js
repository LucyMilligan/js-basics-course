// create an array of price range objects (3) - what properties does each object need?
// inexpensive, moderate, pricey

let priceRanges = [
    new PriceRange(1, 5, 'inexpensive', '$'), 
    new PriceRange(6, 10, 'moderate', '$$'), 
    new PriceRange(10, 20, 'pricey', '$$$') 
]

console.log(priceRanges)

function PriceRange(min, max, tooltip, label) {
    this.min = min;
    this.max = max;
    this.tooltip = tooltip;
    this.label = label;
}


// OR

// let priceRanges = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 5 },
//     { label: '$$', tooltip: 'moderate', minPerPerson: 6, maxPerPerson: 10 },
//     { label: '$$$', tooltip: 'pricey', minPerPerson: 10, maxPerPerson: 20 }
// ]