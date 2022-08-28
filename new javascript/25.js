console.log("tut 25");
let divElem = document.createElement("div");

let val;
val=localStorage.getItem("text")
let text;
if(val == null){
    text = document.createTextNode("this is heading. click to edit it") }
else{
        text = document.createTextNode(val);
    }
divElem.appendChild(text);
divElem.setAttribute("id","elem");
divElem.setAttribute("class","elem");
divElem.setAttribute("style","border: 2px solid black;width:154px;margin:34px;padding:23px");

let container = document.querySelector(".container");
let first = document.getElementById("myfirst");

container.insertBefore(divElem , first)

console.log(first,container,divElem);

divElem.addEventListener('click',function(){
   console.log("click fired");
   let nooftextarea = document.getElementsByClassName("textarea").length;
   if(nooftextarea === 0){
   let html = divElem.innerHTML;
   divElem.innerHTML = `<textarea class = "textarea form-control " id="textarea" rows="3">${html}</textarea>`
   }
   let textarea = document.getElementById('textarea');
   textarea.addEventListener('blur', function(){
    divElem.innerHTML  = textarea.value;
    localStorage.setItem('text',divElem.innerHTML)
   })

});


