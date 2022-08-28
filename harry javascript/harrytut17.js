console.log('tut 17');
document.getElementById("heading").addEventListener("click",(e)=>{
    let variable;
    console.log("you've clicked on heading ")
    variable=e.offsetX;
    variable=e.offsetY;
    variable=e.target;
    variable=Array.from(e.target.classList)
    variable=e.target.className
    variable=e.target.id;
    variable=e.clientX;
    variable=e.clientY;
    
    console.log(variable);

})
