
// // // creating of a function
// // function greet (){
// //     console.log("hello world");
// // }

// // // calling of a function
// // greet();


// // function returning out a value
// // function greet (){
// //     return "hello world!!"
// //     // return "hello world" - > multiple return statment will not work out
// // }

// // let str =greet();
// // console.log(str);


// // function greet (user){
// //     return `hello ${user}!!`
// //     // return "hello world" - > multiple return statment will not work out
// // }
// // let user = 'suryansh';

// // let str =greet(user);
// // console.log(str);


// // assigning function to a variable

// // let add = function(num1,num2){
// //     return num1+num2;
// // }

// // let result = add(5,5);
// // console.log(result);



// // let add = function(num1,num2,num3){
// //     return num1+num2+num3;
// // }

// // let result = add(5,5,5);
// // console.log(result);




// let add = function(num1,num2,num3=4){
//     return num1+num2+num3;
// }

// let result = add(5,5);
// console.log(result);

// // both case of declaring num3 will work



let greet = (user) => {
    console.log("hello " + user);
    return 1; 
}

console.log(greet("suryansh"));