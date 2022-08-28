console.log("tut 17");

// document.getElementById("heading").addEventListener("click",function(e){
//     console.log("you have clicked")

//     let variable = e.target;
//     variable = e.target.className;
//     variable = e.target.classList;
//     variable = Array.from(e.target.classList);
//     variable = e.target.id;
//     variable = e.offsetX;
//     variable = e.offsetY;
//     variable = e.clientX;
//     variable = e.clientY;
//     console.log(variable)

// });


document.getElementById("heading").addEventListener("mouseover",function(e){
    console.log("you have clicked")

    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable)

});