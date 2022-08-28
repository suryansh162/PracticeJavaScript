// type conversion and type coercion
console.log("welocme to tut 5");
let myVar;
// myVar=35;
myVar=String(35); // to convert it into string datatype
// console.log(myVar,typeof myVar);
// let booleanVar =true;
let booleanVar =String(true); // to convert it into string datatype
console.log(booleanVar,(typeof booleanVar));
// let date = new Date;
let date = string(new Date()); // to convert it into string datatype
console.log(date , (typeof date));
// let arr = [1,2,3,4,5,6];
let arr =string([1,2,3,4,5,6]); // to convert it into string datatype
console.log(arr,arr.length,(typeof arr))
// length of array means - how many elements in an array
// length of string means - how many characters (comma is also counted as a character in an array)
let  i=8;
// console.log(i.toString()) // to convert it into string datatype
let stri =Numebr("9898")``; // to convert it into number datatype
console.log(stri, (typeof stri));

let num1= parseInt('980'); // to convert it into integer number datatype
console.log(number,(typeof num1))


let num2= parseFloat('980'); // to convert it into float number datatype
// console.log(number,(typeof num2));
console.log(num2.toFixed(4),(typeof num2));// used to print upto a certain decimal point mentioned in the bracket



// type coercion 
let number =34;
let string ="98";
console.log(number + string) // this is coercion when both of them will be converted into string and 3498 will ber printed  


