//! find(ele,index,Entire_arr) method:


//? find(ele,index,Entire_arr) method:
// It is used to get the 1st occured element which satisfied the condition w.r.to true/false.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array

// find method returns the 1st occured element which satisfied the condition and stop the execution of callback function.
// If no element is satisfying the condition then returns undefined (by default).






// ===================================================================================================
//? find(ele,index,Entire_arr) method:
// (method) Array<number>.find(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number | undefined (+1 overload)
// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
// ===================================================================================================








// let number = [13,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return ele > 4;  //* (true)
// })

// console.log(res); //*6



// let number = [13,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return ele > 54; //* (false)
// })

// console.log(res); //* undefined (by default)




let number = [123,6,1,7,4,19,2,9];

let res = number.find((ele,index,Entir_arr)=>{

    return 54; //(true)
    // return "wedsf"; //* (true)
    // return {}; //* (true)
    // return []; //* (true)
    // return -1; //* (true)
})

console.log(res); //* 123
