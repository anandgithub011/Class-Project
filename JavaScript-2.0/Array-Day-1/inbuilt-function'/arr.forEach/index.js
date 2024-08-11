
//! forEach(ele,index,Entire_Array) Method:


//? forEach(ele,index,Entire_Array) Method:
//  It is used to iterate array element at index position.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array.

//*forEach method always return undefined (by default);
// When we want to return any value don't use forEach Method.

//! Note: Use forEach() method only for iteration purpose or else use it as alternative of for-loop, for-in-loop, for-of-loop.

// The callback function of forEach method runs for every elements inside the array, that means it runs the total number of time the elements available inside the array.




// ========================================================================================================================
//? forEach(ele,index,Entire_Array) Method:
// (method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
// ========================================================================================================================



let num = [3,6,1,7,4,19,2,9];

// let res = num.forEach((ele,index,Entire_Array)=> {

//     return 'hello';
// })
// console.log(res);  //* undefined






// let res = num.forEach((ele,index,Entire_Array)=> {
    
//     console.log("hello");  //* (length of element-times)hello will be printed
//     return 'hello';
// })

// console.log(res);  //* undefined




let res = num.forEach((ele,index,Entire_Array)=> {

    return 'hello';
})

console.log(res);  //* undefined

