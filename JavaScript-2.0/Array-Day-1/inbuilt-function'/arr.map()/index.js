//! map(ele,index,Entire_Array) Method: 

//? map(ele,index,Entire_Array) Method: 
// It is used to perform modification on existing array of elements, index and entire Array.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array

// map method returns a new Array of values returned by the callback function.
// map method does not affect original array.






// ===============================================================================================================
//? map(ele,index,Entire_Array) Method: 
// (method) Array<number>.map<boolean>(callbackfn: (value: number, index: number, array: number[]) => boolean, thisArg?: any): boolean[]

// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value
//=======================================================================================================



// let num = [3,6,1,7,4,19,2,9];

// let res = num.map((ele,index,Entire_Array)=> {

//     console.log("hey"); //* hey will be printed 8-times
//     return 'hello';
// })

// console.log(res);  //*  ['hello','hello','hello','hello','hello','hello','hello','hello']




// let num = [3,6,1,7,4,19,2,9];

// let res = num.map((ele,index,Entire_Array)=> {

//     return ele + 3; 
    
// })
// console.log(res); //* [6,9,4,10,7,22,5,12]





let num = [3,6,1,7,4,19,2,9];

let res = num.map((ele,index,Entire_Array)=> {

    return ele > 3;
    
})

console.log(res);   //* [false,true,false,true,true,false,true];

