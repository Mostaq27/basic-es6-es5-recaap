function add (a, b){
    const result = a + b;
    return result;
}
// const sum = add(5,90);
// console.log(sum)

// function expression 
const add2 = function(a,b){
    return a+b;
}

// arrow function
const add3 = (a,b) => a+b;
const add4 = (num1,num2,num3,num4) => num1 + num2 + num3 + num4;
const sum = add4(4,5,6,7);
console.log(sum)