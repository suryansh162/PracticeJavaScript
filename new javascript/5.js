// type conversion and type coercion
console.log("wlcm to tut 5");
let myVar;
// myVar=34;
myVar=String(34);
console.log(myVar,typeof(myVar));
// let booleanVar=true;
let booleanVar=String(true);
console.log(booleanVar,typeof(booleanVar));

// let date = new Date();
let date = String(new Date());
console.log(date,typeof(date));

// let arr=[1,2,3,4,5];       //arr.length will be 5 as it will just count no of elements of array
let arr=String([1,2,3,4,5]);  //arr.length will be 9 as it will count all characters except brackets 
console.log(arr,typeof(arr),arr.length)

//another way to convert into string 
let i=8;
// let i=true;
// let i=false;
// let i=new Date();
console.log(i.toString(),typeof(i));

//converting to numbers
let neew=Number("8");
neew=Number(true);
neew=Number(false);
// neew=Number("67yh65");
console.log(neew,typeof(neew));


let nuNum = parseInt(98.9812); //will reflect its integer value
nuNum = parseFloat(98.9812); //will reflect the float value
console.log(nuNum,typeof(nuNum));
console.log(nuNum.toFixed(2),typeof(nuNum)); // will show upto that decimal point of number which is written inside ()


let myStr ="698";
let muNum = 34;
console.log(myStr+muNum); // will convert number into string and will concatinate both of them together
