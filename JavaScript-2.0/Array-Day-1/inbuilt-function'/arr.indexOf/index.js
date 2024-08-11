//! indexOf(arg1,arg2) Method:

//* indexOf(arg1,arg2) Method:
//  It is used to get the index-position from the given element in 1st-argument.

// It accepts two arguments, where the 
// 1st-argument is the element to be searching And, the
// 2nd argument is the index position from where to start the search and going towards
// If we don't pass 2nd-argument then, it searchs the element from 0-index.
// it returns the index position of the element,if the element is present ,else it returns -1(by default).
// It does not affect original array.





// ===================================================================================================

//* indexOf(arg1,arg2) Method:
// (method) Array<string>.indexOf(searchElement: string, fromIndex?: number): number*
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
// =====================================================================================================





let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange'];

let indexPosition1 = colors.indexOf('pink');
let indexPosition2 = colors.indexOf('pink',4);
let indexPosition3 = colors.indexOf('blue',3);
let indexPosition4 = colors.indexOf('yellow',4);
let C = colors.indexOf('pink');


console.log(indexPosition1);  //* 3  (index-position)
console.log(indexPosition2);  //* -1 (by default)
console.log(indexPosition3);  //* -1 (by default)
console.log(indexPosition4);  //* 4 (index-position)
console.log(colors);  //*(6) ['red','green','blue','pink','yellow','orange'];