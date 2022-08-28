console.log("tut 30");


const proto = {
    slogan: function () {

        return "this company is best";
    },
    changeName: function (newName) {
        this.name = newName
    }
}


// this creates object name suryansh
const suryansh = Object.create(proto);
suryansh.name = "SURYA";
suryansh.role = "noneee";
suryansh.salary = 300000000;
suryansh.experience = "3 years";


// suryansh.changeName("newSuryansh");



// this also craete object name suryansh(old format)
const suryansh2 = Object.create(proto, {
    name: {
        value: 'suryannnn',
        writable: true
    },
    jobRole: {
        value: "null"
    }
})
// suryansh2.changeName("newSuryansh")



// console.log(suryansh)
// console.log(suryansh2)


function Employee(name, salary, experience) {
    this.name = name,
        this.salary = salary,
        this.experience = experience
}

Employee.prototype.slogan = function () {
    return `this company is best - Regards ${this.name}  `
}


let suryansh11 = new Employee("suryansh11", 140000000, "2years");
let suryansh112 = new Employee("suryansh112", 580000000, "7years")



// console.log(suryansh11);
// console.log(suryansh112);
// console.log(suryansh11.slogan());
// console.log(suryansh112.slogan());


function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience),
        this.language = language
}

//inherit the prototype
Programmer.prototype = Object.create(Employee.prototype)

// manually st the constructor
Programmer.prototype.constructor = Programmer;

let harry = new Programmer("harry", 2, 0, "c++");
console.log(harry);
console.log(harry.slogan());