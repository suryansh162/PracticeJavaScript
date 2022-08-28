console.log("tut 27");


// object literal for creating objects
// let car ={
//     name :"maruti 800",
//     topSpeed :"89kmph",
//     run: function(){
//         console.log("car is running");
//     } 
// }

// console.log(car);
// console.log(car.run);
// console.log(car.name);

// // constructors - template to make object
// new Date();

// creating a constructor for cars

function generalCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
        return 1
    }
    this.analize = function () {
        console.log(`this car is slower by ${200-this.topspeed} kmph then mercedez`);
    }

}

car1 = new generalCar("alto", 140);
car2 = new generalCar("mercedez", 200);
console.log(car1, car2);
// console.log(car1.run());
// console.log(car1.analize());
// console.log(car2.run());