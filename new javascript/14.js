console.log("tut 14");
let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = "red";
// element.innerText = "how are you";
// element.innerHTML = "<b>i am fine</b>";

// console.log(element);
// console.log(element.innerHTML);
// console.log(element.innerText);

// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('b');
// sel = document.querySelector('div');
// sel.style.color ="green"
// console.log(sel)


// let elems = document.getElementsByClassName("child");
// elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div");

// console.log(elems[0].getElementsByClassName("child"));
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = "blue";
});
