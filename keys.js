const glass ={
    name:'glass',
    color:'golden',
    price:'12',
    isCleaned:'true'
};

console.log(glass);
// all properties name 
const keys = Object.keys(glass);
// ['name', 'color', 'price', 'isCleaned']

// all properties values
const values = Object.values(glass);
// [ 'glass', 'golden', '12', 'true' ]
// console.log(values)
// console.log(keys)


const entries = Object.entries(glass);
// console.log(entries)
// Array of Array , two dimensional Array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', '12' ],
//     [ 'isCleaned', 'true' ]
//   ]

// delete glass.isCleaned;
// console.log(glass)
const {isCleaned, ...shortGlass} = glass
// console.log(shortGlass)

// freeze
// Object.freeze(glass);
Object.seal(glass);
    glass.source = 'Bangladesh'
    glass.price = 5000;
    delete glass.name;
    console.log(glass)
