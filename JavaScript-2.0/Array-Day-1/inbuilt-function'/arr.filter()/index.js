//?! filter(ele,index,Entire_Arr) Method:


//? filter(ele,index,Entire_Arr) Method:
// It is used to filter the array elements and get the element in new array based on the condition, whether true or false.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array.

// filter methods returns an array of element which satisfied the condition, whether its true or false;
// filter method  does not affect original Array.



// ================================================================================================================
//? filter(ele,index,Entire_Arr) Method:

// Returns the elements of an array that meet the condition specified in a callback function.

// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
//===============================================================================================================



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((ele,ind,Entire_Arr)=>{
//     return ele>4;
// })

// console.log(res);  //*[6,7,19,9]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((ele,ind,Entire_Arr)=>{
//     console.log("hey");  //(8-times) hey will be printed and empty Array.
// })
// console.log(res); //*[]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((ele,i,Entire_Arr)=>{
//     return i;
// })
// console.log(res); //*[6,1,7,4,19,2,9]
    
    
    
    
    
// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e,i)=>{
//     return e>4;  //* (true condition return that element in new array)
// })
// console.log(res);  //*(4) [6, 7, 19, 9]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e,i)=>{
//     return e-4;  
// })
// console.log(res);  //*(7) [3, 6, 1, 7, 19, 2, 9]



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return e+4;  //* (true)
// })
// console.log(res); //*[3,6,1,7,4,19,2,9]



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return "dsds";  //(true) 
// })
// console.log(res); //*[3,6,1,7,4,19,2,9]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return 2+undefined;  //* NaN(false)
    
// })
// console.log(res);  //*[]



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return 2;  //* (true)
    
// })
// console.log(res);   //*[3,6,1,7,4,19,2,9]








// ~problem===========================================================================================================

// problem: check if number is present inside the array, then print that number/element else, print undefined.
// let number = [3,6,1,7,4,19,2,9];

// function isNumAvailable(numArr){
//     for (let num of numArr){
//         if(num > 4){
//             return num;
//         }
//     }
// }

// let res = isNumAvailable(number);
// console.log(res); //*[6]


//~ problem: check if number is present inside the array, then print the index position, else print -1.

let number = [3,6,1,7,4,19,2,9];

function isNumAvailable(numArr){

    for(let i in numArr){

        if(numArr[i] > 4){
            return i;
        }
    }
    return -1;   //* typeof number?
}

let res = isNumAvailable(number);
console.log(res);  //*1
console.log(typeof res);  //*string


// ~===========================================================================================================
















// to check the condition either truthy and falsy.=========

// if(-1){  //truthy/falsy
//     console.log("hello");
// }
// else{
//     console.log("No")
// }



// if(null-4){   // truthy/falsy
//     console.log("hello");
// }
// else{
//     console.log("No")
// }

// console.log(typeof(null-4)); //number
// console.log(typeof(undefined-4)); //number
// console.log(typeof null-4); //NaN
