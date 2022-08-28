console.log('tut 15');

let cont =document.querySelector('.no');
cont =document.querySelector('.container');
// console.log(cont.childNodes); // will get all the child nodes of the parent element but it will include att the things even the comments and texts apart from id , class , tags
// console.log(cont.children) // will only include tags, id , class (more used)
let nodeName =cont.childNodes[1].nodeName
let nodeType =cont.childNodes[0].nodeType
console.log(nodeName);
console.log(nodeType);

/*
Node type meanings-
1 - element
2 - attribute
3 - text Node
8 - comment
9 - document
10 - doctype

*/

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);       // will give the element child of element child of element child of class container

// console.log(container.firstChild);           //will give first child of class container
// console.log(container.firstElementChild);    // will give first element child of class container

// console.log(container.lastChild);         // will give last child
// console.log(container.lastElementChild);   // will give last child element
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);   //will give parent node of first element child of class container
console.log(container.firstElementChild.nextSibling);  //willl give next sibling of frist child element
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

