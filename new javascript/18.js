console.log("tut 18");
// let btn=document.getElementById("btn");
// btn.addEventListener("click",func1);

// function func1(e){
//     console.log("thanks",e);
//     e.preventDefault();  // this is to prevent default behaviour of any element


// }

// btn.addEventListener("dblclick",func2);

// function func2(e){
//     console.log("thanks double click",e);
//     e.preventDefault();  // this is to prevent default behaviour of any element


// }


document.querySelector(".no").addEventListener("mouseenter",function() {
    console.log("you enterd no ");
})

document.querySelector(".no").addEventListener("mouseleave",function() {
    console.log("you exited no ");
})

document.querySelector(".container").addEventListener("mousemove",function(e) {
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},156)`
    console.log("you are moving inside container ");
})

