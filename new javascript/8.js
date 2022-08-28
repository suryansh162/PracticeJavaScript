console.log('tut 8');
// const age =65;
const age =18; // since double equal to so it will not match the data type and will just match datat type
// const vari =43;

const doesdrive = true;

// if (age==19) {
//     console.log('age is 19');
// }                       
// else if (age ==65) {
//     console.log("age is 65");
// }
// else{
//     console.log("age is not 19");
// }


// // BY THIS WE CAN CHECK THAT var i exist or not
// if (typeof vari!=="undefined") {
//     console.log("var i is defined");
// } 

// else {
//     console.log("var i is undefined");
    
// }


// // use of boolean
// if (doesdrive && age>=18){           // both conditions sould be true
//     console.log("you can drive");
// }

// else{
//     console.log("cant drive");
// }


// if (doesdrive || age>=18){                 // any one if the conditions can be true
//     console.log("you can drive");
// }

// else{
//     console.log("cant drive");
// }



// // ternary operator --> will check and will execute the statment then and there
// console.log(age ==45? "age is 45":"age is not 45");

switch (age) {
    case 18: 
    console.log('age is 18')
    break;

    default:
    console.log("not 18");
    break;
}