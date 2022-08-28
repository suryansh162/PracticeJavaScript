// // let array = [5,1,4,6];

// // array.push(9) // this will push a value in th array from backside and therefore will add a element 
// // console.log(array)// this will print array
// // console.log(array.length)// this will print out length of array
// // console.log(array[3])// this will print out specefically the value of index 2



// // we can also create array of different data types

// let data =[3,'suryansh',{tech:'js'},function (params) {console.log("hello world")}]

// console.log(data)
// data[3]();

// // console.log(data.pop()) - will remove the element from the last (end)
// // console.log(data.shift()) - will remove the element from the first 
// // console.log(data.unshift()) - will add the element from the first(start/begining) 
// // console.log(data.splice(from index number to remove, no. of values to remove, adding some values)) - will remove the element from between




//For of Loop with an Array in JavaScript
let nums =[];
nums[0]=4;
nums[99]=12;


// // for of loop
// for(let n of nums){  // n will store each elements of array everytime loop executes and wil print it everytime
//     console.log(nums.length)
// }


// for in loop
for(let key in nums){

    console.log(nums[key])
}