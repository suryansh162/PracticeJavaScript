console.log("tut 31");

class Employee{
    constructor(givenName,givenAge,givenRole){
    this.name =givenName,
    this.age = givenAge,
    this.role =givenRole
    
    
    }

    slogan(){
        return `this is a good company regards - ${this.name}`
    }
    joiningYear(){
        return 2020 - this.age

    }
    // static dosent need making of any object to run as unlike constructor
    static add(a,b){ 
        return a+b;
    }

    
    
}
class Programmer extends Employee{
    constructor(givenName,givenAge,givenRole,language,git){
    super(givenName,givenAge,givenRole)
    this.language = language;
    this.git=git
}


 favEmployeeLang(){
    if (this.language == "C++") {
        return "C++"
    }
    else{
        return"JavaScript"
    }
}


static multiply(a ,b){
    return a*b;
}
}

let suryansh = new Employee("sharma",90,"programmer");
console.log(suryansh);
console.log(suryansh.slogan()); 
console.log(suryansh.joiningYear()); 


let suryansh2 = new Programmer("yup", 100, "fullstavk webdev", "C++", "suryansh162")

console.log(suryansh2);
console.log(suryansh2.favEmployeeLang("C++"));
console.log(Programmer.multiply(2,7));