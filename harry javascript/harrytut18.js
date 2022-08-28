console.log('tut 18');
let btn = document.getElementById("btn");
btn.addEventListener("click", func1)
btn.addEventListener("dblclick", func2)
btn.addEventListener("mousedown", func2)

function func1(e){
    console.log('its a click')
    e.preventDefault();
}

function func2(e){
    console.log('its a doube click')
    e.preventDefault();
}


function func3(e){
    console.log('its a scrolldown')
    e.preventDefault();

}

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("you enterd in no");
// })

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('you exited no');
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    
    console.log(e.offsetX,e.offsetY);
document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetX+e.offsetY,156})`;
    
    console.log('you doing mouse move event');
})
