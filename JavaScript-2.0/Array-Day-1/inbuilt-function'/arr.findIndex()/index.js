
//! findInde(ele,index,Entire_arr) method:

//? findInde(ele,index,Entire_arr) method:
// It is used to get the index-position which satisfied the condition w.r.to true/false.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array

// find method returns the index-position which satisfied the condition and stop the execution of callback function.
// If no element is satisfying the condition then returns -1(by default).






// ===================================================================================================
//? findIndex(ele,index,Entire_arr) method:
// (method) Array<number>.findIndex(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number
// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

// ===================================================================================================




// let number = [3,6,1,7,4,19,2,9];

// let res = number.findIndex((ele,index,Entir_arr)=>{

//     return ele > 4;  //* (true)
// })

// console.log(res); //* 1


// let number = [3,6,1,7,4,19,2,9];

// let res = number.findIndex((ele,index,Entir_arr)=>{

//     return ele > 34;  //* (falsy value)
// })

// console.log(res); //*-1



// let number = [13,6,1,7,4,19,2,9];

// let res = number.findIndex((ele,index,Entir_arr)=>{

//     return 33; //* (truthy value)
// })

// console.log(res); //* 0




let number = [13,6,1,7,4,19,2,9];

let res = number.findIndex((ele,index,Entir_arr)=>{

    return -0; //* (falsy value)
})

console.log(res); //* -1(by default)




// let number = [123,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return 54; //* (true)
//     // return "wedsf"; //(true)
//     // return {}; //(true)
//     // return []; //(true)
//     // return -1; //(true)
// })

// console.log(res); //* 123
