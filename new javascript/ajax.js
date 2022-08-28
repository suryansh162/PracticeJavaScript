console.log("ajax tutorial in video");


let fetchBtn = document.getElementById("fetchBtn")
fetchBtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler() {
    console.log('you have clicked fetchBtn');

    //instentiate an xhr object - initiated
    const xhr = new XMLHttpRequest();

    // opening the object and telling to get request from a file asynchronously(non blocking)
    // xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)

    // USE THIS FOR POST 
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type', 'application/json')
    //  xhr is in progress can use a spinner here inside this function 
    xhr.onprogress = function () {
        console.log("on progress");

    }
    // xhr statechange - status is showing weather it is ready(4) or not 
    // xhr.onreadystatechange = function () {
    //     console.log("ready state-status currently is ", xhr.readyState)
    // }
    // now response is ready what to do after after it is ready
    xhr.onload = function () {
        if (this.status === 200) {
            

            console.log("this is 1 section ",this.responseText);
        } else {
            console.log("some error occured");
        }

    }

    // send the request
    params = `{"name":"tesssst","salary":"123","age":"23"}`
    xhr.send(params);
    console.log(params);
}




let popBtn = document.getElementById("popBtn")
popBtn.addEventListener("click", popHandler)

function popHandler() {
    console.log('pop handler button clicked');



    //instentiate an xhr object - initiated
    const xhr = new XMLHttpRequest();

    // opening the object and telling to get request from a file asynchronously(non blocking)
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)

    // // USE THIS FOR POST 
    // xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true)
    // xhr.getResponseHeader('Content-type', 'application/json')
    //  xhr is in progress can use a spinner here inside this function 
    // xhr.onprogress = function () {
    //     console.log("on progress");

    // }

// xhr statechange - status is showing weather it is ready(4) or not 
    // xhr.onreadystatechange = function () {
    //     console.log("ready state-status currently is ", xhr.readyState)
    // }
    // now response is ready what to do after after it is ready
    xhr.onload = function () {
        if (this.status === 200) {

            console.log("this is 2 section");
            let Obj = JSON.parse(this.responseText);
            console.log(Obj);
            let list = document.getElementById("list");
            str = " ";
            for (key in Obj){
                str = str +`<li>${Obj[key].employee_salary}</li>`
            }
            list.innerHTML = str;
        } 
        else {
            console.log("some error occured");
        }

    }

    // send the request
    xhr.send();
}
    