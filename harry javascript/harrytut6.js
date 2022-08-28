console.log('we are at tut 6');
const name = 'suryansh';
const greeting ="gud mrning";
console.log(greeting +' '+ name);
let html;
 html = '<h1> this is a heading </h1> ' +
         '<p> this is para tag</p>'


html = html.concat(' hello'+ " now") // to add strings in a string
console.log(html);
console.log(html.length);
console.log(html.toLowerCase()) // returning string to lower case but not changing it
console.log(html.toUpperCase()) // returning string to upper case but not changing it
console.log(html);
console.log(html.indexOf("h")) // will give starting index of h1
console.log(html.lastIndexOf("h")) // will give last index og h1
console.log(html.charAt(1))
console.log(html.includes(" "))
console.log(html.endsWith("now"))
console.log(html.substring(1,7))// will give string till n-1 index is same as .slice
console.log(html.slice(0,4)); // same as substring
console.log(html.split("<")); // this will break the line to start a new one from where ths string appears
console.log(html.replace('this', 'yes this ')); // replaces only at first  occurances
console.log("hello there");
let fruit1 =['orange'," ",'apple'];
let fruit2 =['strawberry','and grapes'];
let myhtml=` hello ${name} you like ${fruit1} ${fruit2}`;
console.log(myhtml);
document.body.innerHTML=myhtml;
console.log(Array.isArray(fruit1)); // use to chk if it is a array or not
console.log(fruit1.length);
console.log(fruit1[0]);
fruit1[0]="papita" // to replace that index in array
console.log(fruit1) 
console.log(fruit1.indexOf("apple"));
// mutating or modifying arrays
fruit1.push("98"); // add from back
console.log(fruit1);
fruit1.pop(); // remove from back
console.log(fruit1);

fruit2.unshift("45"); // add from front
console.log(fruit2);
fruit2.shift(); // remove from front
console.log(fruit2);

fruit1.splice(1,2); // to remove starting from 1 and remove 2 elements
console.log(fruit1)

// objects 
let obj ={
    name:"suryansh",
    address:"mp",
    isActive :true
}

console.log(obj.address);
console.log(obj['name']);

