console.log("tut 36");
const students = [
    {name : "suryansh1" , subject:"Javascript1"},
    {name : "suryansh2" , subject:"Javascript2"},
    {name : "suryansh3" , subject:"Javascript3"},
    {name : "suryansh4" , subject:"Javascript4"},
    {name : "suryansh5" , subject:"Javascript5"},
]

function enrollStudents(student,callback){
    setTimeout(function() {
        students.push(student);
        console.log("student has been enrolled");
        callback();
    }, 2000);
}
function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name} </li>`
        })
        document.getElementById('students').innerHTML =str;
        console.log("students have been fetched");
        
    }, 3000);
}

let newStudent = {name : "123", subject: "py"}
enrollStudents(newStudent,getStudents);