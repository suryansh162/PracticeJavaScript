console.log("tut 20");

// add a key value inside local storage
let impArray= ["adrak","pyaz","bhindi"];
localStorage.setItem("name","harry");
localStorage.setItem("name2","hyrii");
localStorage.setItem("sabzi",JSON.stringify(impArray));   // converts objects to string

//retrive an item form local storage
let name = localStorage.getItem('name');
name = localStorage.getItem('name2');
name = JSON.parse(localStorage.getItem("sabzi"));  //  converts string to object
console.log(name);

// to clear local storage
// localStorage.clear();

// to clear a perticular item
// localStorage.removeItem("name");


sessionStorage.setItem("sname","harry");
sessionStorage.setItem("sname2","hyrii");
sessionStorage.setItem("ssabzi",JSON.stringify(impArray));   // converts objects to string

