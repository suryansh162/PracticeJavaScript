//  let laptop ={
//     name :"suryansh" ,
//     age :21,
//     work: "student",
//   name1:function(){
//     console.log("hello world");
//   }

//  }

//  laptop.name1();


// let laptop1 ={
//     name :"suryansh" ,
//     age :21,
//     work: "student",
//   name1:function(){
//     console.log(this.age);
//   }

//  }

//  let laptop2 ={
//     name :"surya" ,
//     age :41,
//     work: "work",
//   name1:function(){
//     console.log(this.age);
//   }

//  }

//  laptop2.name1();
 // here by writing this.property we can target any object as it points out the element
 //of the current object we can just change the object name at objectName.function() will call out the one whose name is written 






 let laptop1 ={
    name :"suryansh" ,
    age :212,
    work: "student",
    compare:function (other) {
        if (this.age>other.age) {
            console.log(this)
        }
        else
        console.log(other)
        
    },
  name1:function(){
    console.log(this.age);
  }

 }

 let laptop2 ={
    name :"surya" ,
    age :41,
    work: "work",
  name1:function(){
    console.log(this.age);
  }

 }

laptop1.compare(laptop2)

// this is a menthod in which two objects are compairing themselves and no third party function is involved in their comparison of their methods