console.log("tut 9");
//type of loops -
// for loop
// while
//do while


//for loop
// for (let i = 0; i < 20; i++) {
//     console.log(i);

// }

//while loop
// let j = 0;
// while (j < 20) {
//     console.log('j');
//     j++;
// }

// do-while loop
// let k=1;
// do{
//     k+=1;
//     console.log('do k andr',k);
// }
// while (k<10);


// break statment
// let k=0;
// do{
//     k+=1;
//     console.log(k);
//     if (k===5) {
//         break;
//     }
// }
// while (k<10);
// console.log("done")
// // break will stop whole process then and there and will come out of whole thing




// continue statment
// let k=0;
// do{
//     if (k===5) {
//         console.log("isko bhagao");
//         k+=1;
//         continue;
//     }
//     k+=1;
//     console.log('do k andr',k);
// }
// while (k<10);

// // arrays
// let arr =[2,3,4,5,3,5,345,35];
// arr.forEach(function (element) {
//     console.log(element);
    
// })


// object
let obj={
    name:"suryansh",
    hello:"no",
    yes:"hm"

}
// console.log(obj)


for (let key in obj) {
   console.log(`${key} of object is ${obj[key]}` );
}