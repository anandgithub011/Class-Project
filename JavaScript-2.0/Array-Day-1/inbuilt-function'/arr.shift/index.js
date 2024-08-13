//! shift() Method:


// Reverse of pop() method>>>>>>>>>>>>>>>>>>>.


// shift() Method:
//  Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// >>>>>>>>>>>>
// shift() method is used to remove the first element of the Array.
// shift() method doesn't have any argument.
// shift() method returns the deleted element/removed element.
// shift() method affects original Array.

// *Note: If Array is empty then, pop() and shift() methods returned undefined.

// ========================================================================================
// shift() Method:
// (method) Array<string>.shift(): string | undefined
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// ========================================================================================






let colors = ['red','green','blue','pink','blue','orange'];
// let colors = []; // output will be undefined

console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
console.log(colors.length); //*6

console.log("=================================");


//* shift() method returns the deleted element/removed element.
let deletedElements = colors.shift();

console.log(colors); //*  (5) ['green', 'blue', 'pink', 'blue', 'orange']
console.log(deletedElements); //*red

