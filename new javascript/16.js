console.log("tut 16");
let element = document.createElement("li");
let text = document.createTextNode("i am a text node");
element.appendChild(text);
element.className = 'childul';
element.id= 'createdli';
element.setAttribute("title","mytitle");
// element.innerHTML="<h1>hello this is created by me</h1>"
// element.innertext="hello this is created by me"

let ul = document.querySelector("ul.this");
ul.appendChild(element); 

console.log(element);

let elem2 = document.createElement("h3");
elem2.id = "elem2";
elem2.className =  "elem2";
let tnode = document.createTextNode("cretaed node for elem 2 ");
elem2.appendChild(tnode);  // to replace a element

element.replaceWith(elem2);
let myul = document.getElementById("myul");
myul.replaceChild(element,document.getElementById("fui"));
myul.removeChild(document.getElementById("lui"));
// let pr = elem2.getAttribute("class");
pr = elem2.hasAttribute("class");
// pr = elem2.getAttribute("id");
pr = elem2.removeAttribute("id")
pr = elem2.hasAttribute("id")

console.log(pr);
