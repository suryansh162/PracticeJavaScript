// primitive data types
// string
let name = "suryansh";
// console.log("my string is ",name);
console.log("my string is "+name);        // same
console.log("data type is "+typeof(name));

//numbers
let marks = 43;
console.log("data type of marks is "+typeof(marks));

//boolean
let drive =true;
console.log("data type of drive is "+typeof(drive));
console.log(drive);


//null
let nummVar=null;
console.log(typeof(nummVar));  //bogous return value

let ud =undefined
console.log(ud,typeof(ud));

//myarr-
let myArr=[12,34,65,43,true,'hyyuu']
console.log(myArr,typeof(myArr));



//object literals

let stMarks={
    1:34,
    2:67,
    3:78,
    4:90
}

console.log(stMarks,typeof(stMarks));

//date
let date = new Date();
console.log(date,typeof(date));