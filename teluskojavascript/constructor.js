
function Alien(name,tech) {
    this.name = name;
    this.tech = tech;
    this.work = ()=>{
        console.log("coding long")
    }
    
}




let alien1 = new Alien('suryansh','JS');
let alien2 = new Alien('sury','c++');
// writing new will create a new object every time we use constructor function to make object
alien1.tech = 'webdev'; // this can make changes in tech in alien1 object 
console.log(alien1);
alien1.work();
