// console.log("tut 24");
// let date = new Date;
// console.log(typeof date);
// let otherDate = new Date("02-16-2001 05:54:34");
// // otherDate = new Date("june 03 2001 05:54:34");
// // otherDate = new Date("02/25/2001");  // mm/dd/yy
// let a = otherDate.getDate();
//  a = otherDate.getDay();   // count starts from 0
//  a = otherDate.getSeconds();
//  a = otherDate.getMinutes();
//  a = otherDate.getHours();
//  a = otherDate.getTime(); // no of seconds since 1 jan 1970
//  a = otherDate.getMilliseconds();
// //  a = otherDate.getMonth(); // count starts from 0
// otherDate.setDate(23);
// otherDate.setMonth(0); // jan
// otherDate.setFullYear(1900); 
// otherDate.setMinutes(13); 
// otherDate.setHours(19); 
// otherDate.setSeconds(10); 
//  console.log(a);
// console.log(otherDate);




console.log("tut 24");
let t = new Date();
t = new Date("02-16-2001 05:54");
t = new Date("June 13 1912");
t = new Date("09/30/2044 09:12:13:14");
console.log(t);
a=t.getDate();
console.log(a);
a=t.getDay();
console.log(a);
a=t.getTime();
console.log(a);
a=t.getHours();
console.log(a);
a=t.getMonth();
console.log(a);
a=t.getMinutes();
console.log(a);
a=t.getSeconds();
console.log(a);
console.log(typeof t);

t.setDate(1)
t.setHours(2)
t.setMonth(3)
t.setMinutes(4)
t.setSeconds(5)
t.setFullYear(2022)

t = new Date("09/30/1289 09:12:13:14");
console.log(t)




