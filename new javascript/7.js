console.log("tut7");

// making an array
let marks=[12,32,13,32,1,22,12];
const fruits=['orange','apple','guava'];
const mixed=[23,21,1,'uhdsi',[2,3,1]];

// making an array with help of const constructor
const arr = new Array(12,23,32,31,3,1,233,'orange');
// console.log(arr);
// console.log(fruits);
// console.log(fruits[1]);
// console.log(marks);
// console.log(mixed);
// console.log(arr.length);
// console.log(Array.isArray(fruits)); // use to find that a given object is an array or not
// marks.pop(); // peeche se gayab
// console.log(marks);
// marks.push(90) // peeche is element insertion
// console.log(marks);
// marks.findIndex(12);
// console.log(marks);
// marks.shift();  // samne se gayab
// marks.unshift(99); // samne se element insertion
// marks.splice(2,3); // index 2 se chalke 3 element gayab
// marks.reverse()
// console.log(marks)
// here original array is changing

let marks2=[1,2,3,4];
marks=marks.concat(marks2);
console.log(marks);

let myobj ={
    'my name':'suryansh',
    isActive:true,
    channel:true,
    marks:[45,67,89]
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj['my name']);
