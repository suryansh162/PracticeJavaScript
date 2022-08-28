console.log('tut6');
const name ='suryansh';
// const greet ='gud mrning';
// // console.log(greet+name); // string concatination
// console.log(greet+' '+name); // string concatination

// let html ="this is a new day "+"hello how are you";
// html=html.concat(' i ','am ','fine '); // will add the string at the end of the html (here)
// console.log(html,html.length);
// console.log(html.toLowerCase()); // change all to upper case
// console.log(html.toUpperCase()); // change all to upper case
// console.log(html);               // but all the above function performed will not change the original

// console.log(html[1]);           // will print character that will pe present at that index (starting from 0)
// console.log(html.indexOf('h'))   // will tell at which index it is starting(only first occurence) and will return -1 if it is not present
// console.log(html.lastIndexOf('h')) // will tell at which index it is starting(only last occurence) and will return -1 if it is not present
// console.log(html.endsWith('this'));
// console.log(html.endsWith('fine '));
// console.log(html.includes('this'));
// console.log(html.substring(0,18));
// console.log(html.slice(0,18));
// console.log(html.split(" "));//will split where space appears
// console.log(html.split("s"));//will split where s appears
// console.log(html.replace('day','town')) // will replace day by town
let fruit1='orange';
let fruit2='apple';
let html =`hello ${name}
<h1>this is "my" page</h1>
 my favrourite fruits are ${fruit1} and ${fruit2} `
 document.body.innerHTML=html;



