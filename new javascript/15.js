console.log("tut 15");
let cont = document.querySelector(".no");
cont = document.querySelector(".container");

console.log(cont.childNodes);
// console.log(cont.children);  // to avoid html tags
// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[0].nodeType;
// // console.log(nodeName);
// // console.log(nodeType);

let container = document.querySelector("div.container");
// // console.log(container.children[1].children[0].children)
// console.log(container.firstChild); // involes all attributes
// console.log(container.firstElementChild); // involves only elmenets
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount); // count of all child elements
console.log(container.firstElementChild.nextSibling); // involves any next subling
console.log(container.firstElementChild.nextElementSibling); // involves only element sibling

/*node types
1)element
2)attribute
3)text node
4)comment
5)document
6)docType

*/



// console.log(cont);
