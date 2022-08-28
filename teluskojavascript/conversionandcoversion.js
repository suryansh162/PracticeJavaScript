// let num =6;
// console.log(num,typeof num);

//Explicit conversion -

// let num ="6";
// console.log(num,typeof num);

// let num =Number("6");
// console.log(num,typeof num);

// let num =String(6);
// console.log(num,typeof num);

//Coercion - when we are concatinating two different data types then javascript will automatically convert that into required datat type according to the need

let x ;
// console.log(x,typeof x);

x =6;
// console.log(x,typeof x);

x = x+" ";  // number + string = string
console.log(x,typeof x);

x=x-2;  // number - string = number   // here if we write +x +2 then it will convert that into number and will do addition and will giver 8 
console.log(x,typeof x); 

x=!x;  //every number is true in boolean initially except 0
console.log(x,typeof x);
console.log(Boolean(7));
console.log(Boolean(0)); // 0 is false in boolean
console.log(Boolean(null));  // null is false in boolean

// undefinerd is false in boolean


// parseInt is a special function which will string and convert it into numbers

let y=parseInt("133 suryansh");
console.log(y,typeof y)
