// console.log("tut 28");

// // prototypes
// let obj = {
//     name : "suryansh",
//     channel : "none",
//     address : "jbp"
// }
// console.log(obj);

// // Object.prototype.getName = function () {
// //     return this.name
// // }  ---> this is totally not allowed as it will change the prototype of the objrct in the engine

// function Obj(givenName) {
//     this.name = givenName;
// }

// Obj.prototype.arguments = function () {
//     return this.name;
// }

// Obj.prototype.setName = function (newName) {
//     this.name = newName;
// }

// let obj2 = new Obj("ra");
// console.log(obj2);



let obj1={
    name:"surya",
    class:"none",
    location:"hill"
}

console.log(obj1)



function obj(givenName){
    this.name= givenName
}

let obj2 = new obj("suryaaaa");
console.log(obj2)