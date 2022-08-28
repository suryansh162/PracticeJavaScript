console.log('Welcome to tut 12.js');
let a = document;
a = document.all; // to list out all the elements of the documents
// a = document.body; // to list out only body element of the documents
// a = document.forms[0]; // to list out only form element of the documents
// Array.from(a).forEach(function(element){   // to make a array of all the elements of a and then to list out all the elements of the documents separately
//     console.log(element);
// })
a = document.links[0];  // to list out the link element of the documents
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);





// tut 13 exercise soln
/*
The Solution to Excercise 1:-

let a = document.links;

Array.from(a).forEach(function(element){
     if(element.href.includes("javascript"))
    {
           console.log(element.href);
    }
}
);
*/