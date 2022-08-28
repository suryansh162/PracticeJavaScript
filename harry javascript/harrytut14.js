console.log('this is tut 14');
/* 
type of element selector
1) single element selector
2) multi element selector
*/

let element = document.getElementById('myfirst');
// element =element.className;
// element=element.parentNode;
// element=element.childNodes;
element.style.color = 'red';
element.innerHTML='<b> hey hello there </b>';
element.innerText='hey hello there';
console.log(element.innerHTML);
console.log(element.innerText);

// querry selector is used to select the element of a perticular class , tag, id but it will fetch only the first element
// let selec = document.querySelector('#myfirst');
//  selec=document.querySelector('.child');
//  selec=document.querySelector('div');
//  console.log(selec);

// multi element selector is used to select all the element of a class , tag, and it will fetch all elements 
 // 2.Multi element sekector
 let ele = document.getElementsByClassName('child');
 ele = document.getElementsByClassName('container');
 ele = document.getElementsByTagName('div');
 console.log(ele);

// to iterate all element of a perticular tag ,class ,id in aperticular array form and then performing any actions on them
//  Array.from(ele).forEach(element => {
//     console.log(element);
//     element.style.color ='blue';
//  });



 // alternative method

 for (let index = 0; index < ele.length; index++) {
    const element = ele[index];
    console.log(element);
    element.style.color ='blue';
    
 }