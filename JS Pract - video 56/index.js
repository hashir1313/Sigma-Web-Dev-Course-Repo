// Variables and DataTypes

// Variables can be declared by following methods:
let x = 5; //Local Declaration, can be declared globally
var y = 10; //Global Declaration
const z = 15; //Constant

// DataTypes:   
let a = 5; //Number
let b = "Hashir"; //String
let c = true; //Boolean
let d = null; //Object
let e = undefined; //Undefined
let f = [1, 2, 3]; //Array
let g = {name: "Hashir", age: 14}; //Object
console.log(a, b, c, d, e, f, g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

//Operaters in JS
let sum = a + 10;
let sub = a - 10;
let product = a * 10;
let div = a / 10;
console.log(sum, sub, product, div);

// Conditions:
if(a<10){
    console.log("a is less than 10");
}
else if(a>10){
    console.log("a is greater than 10");
}
else{
    console.log("a is equal to 10");
}
