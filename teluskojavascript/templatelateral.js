// let num1 =2;
// let num2 =5;
// let result = num1+num2;

// console.log(`the addition of ${num1} and ${num2} is ${result}`)
// // ${} - is used as template literal

// console.log("my name is \nsuryansh sharma")


//***********************imp */
let num = 12345678;
let num2=0;
// while (num>0) {
//     console.log(num%10);
//     num = parseInt(num/10);
//     console.log(num);
    
// }

while(num>0){
    remainder=num%10;
    num=parseInt(num/10);
    num2=String(num2+remainder)
}
console.log(Number(num2));





