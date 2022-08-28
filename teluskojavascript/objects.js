// let input ="name"

// let alien = {
//     name: "suryansh",
//     tech:"javascript",
//     work_experience: 5,

// }

// console.log(alien);
// console.log(alien.name);
// console.log(alien[input]); // this [] are used when we want to fetch the data from a element which is not present inside the object
// console.log(alien.work_experience);

//// *********nesting of objects**********

let input ="name"

let alien = {
    name: "suryansh",
    tech:"javascript",
    work_experience: 5,
    laptop :{
        name: "dell", 
        color: "grey",
        RAM :"8gb"
    }

}

// delete alien.laptop  // it will delete the element name laptop from the object alien so wehn we print it the laptop will not print
// console.log(alien.laptop.color.length)
console.log(alien.laptop.color.length)
// console.log(alien?.laptop?.color?.length)
 // ? will check out if the element is present in object if it is not present then if will not show error justw ill print undefined