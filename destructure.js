const actor ={
    name:'ananata',
    age:30,
    phone:'01723456788'
    // money: 25664434
}
// if right side is an object left side of destrutring will be object as well
// use property name as a variable that contains the property value

const {phone, age: boyos} = actor 

// const phone =actor.phone;
// const name = actor.name;
// const age = actor.age;
console.log(phone)
console.log(phone)
console.log(phone)
// console.log(age)
// console.log(age)
console.log(boyos)
console.log(boyos)
console.log(boyos)
// console.log(name)

// array destructuring
const Numbers = [45, 99]
const [first, second] = Numbers;
const [x, y] = [12, 66];
// advanced
function doubleThem(a, b){
    return[a*2, b*2]
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom,ditiyo)