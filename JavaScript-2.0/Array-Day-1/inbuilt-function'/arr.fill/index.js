
// !fill(arg1,arg2,arg3)  Method:


//* fill(arg1,arg2,arg3)  Method:
//  It is used to replace array elements with new elements, which is passed in 1st-argument.

// it accepts three arguments where the
// 1st-arguments is new element. and the
// 2nd-argument is index position, where to start and replace, and the
// 3rd-argument is end index-positon which is excluded.

// It returns an array of newly replace elements.
// It affects the original array.







// ====================================================================================================================
//* fill(arg1,arg2,arg3)  Method:
// (method) Array<string>.fill(value: string, start?: number, end?: number): string[]
// Changes all array elements from start to end index to a static value and returns the modified array

// @param value — value to fill array section with

// @param start
// index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

// @param end
// index to stop filling the array at. If end is negative, it is treated as length+end.

// ====================================================================================================================





let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //(6) ['red','green','blue','pink','yellow','orange']




let newArr1 = colors.fill('black'); 
let fdccdc = colors.fill('dbbd',0,1);


console.log(newArr1);  //
console.log(fdccdc);  //
// console.log(newArr2);  //

// *It affects the original array.
console.log(colors);  //




