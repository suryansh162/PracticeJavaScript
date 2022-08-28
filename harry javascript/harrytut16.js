console.log("tut 16");
// create a node
let element= document.createElement('li');
let text = document.createTextNode('hello hey there how are you');
element.appendChild(text);
console.log(element);

// adding class name id and attributes to li
element.className='childu1';
element.id='createdli';
element.setAttributes='title', 'mytitle'
element.innerHTML='<b>hello hey there how are you</b>'
let ul =document.querySelector('ul.this');
ul.appendChild(element)
console.log(ul);

// replace a node
let elem =document.createElement('h3');
elem.id="elem";
elem.className='elem';
let txt = document.createTextNode('this will replace you');
elem.appendChild(txt);
element.replaceWith(elem);

// to exchange positions of child elements
let uh = document.getElementById('newid');
// uh.replaceChild(element,document.getElementById('liid'))
uh.removeChild(document.getElementById("liid"));
// getattribute - to get the preticular attribute of a element
// hasattribute - to check that if the element has that attribute will return true if it has or vice versa
// removeattribute - to remove a attribute from a element

let pr =elem.hasAttribute('href');
elem.removeAttribute('id');
elem.getAttribute('class')
elem.setAttribute('title','newtitle')
console.log(pr,elem)