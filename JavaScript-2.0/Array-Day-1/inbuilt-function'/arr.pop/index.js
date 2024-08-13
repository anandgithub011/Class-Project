//!pop() Method: 

//? reverse of shift() method >>>>>>>>>>>>>>>>>>>>>.

//? pop() Method: 
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// >>>>>>>>>>>>
// pop() method is used to remove the last element of the Array.
// pop() method doesn't have any argument.
// pop() method returns the deleted element/removed element.
// pop() method affects original Array.

//* Note: If Array is empty then, pop() and shift() methods returned undefined.





// ===============================================================================================
//? pop() Method: 
// (method) Array<string>.pop(): string | undefined
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// ===============================================================================================





let colors = ['red','green','blue','pink','blue','orange'];
// let colors = []; //* output will be undefined

console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
console.log(colors.length); //*6

console.log("=================================");


let deletedElements = colors.pop();

console.log(colors); //* (5) ['red', 'green', 'blue', 'pink', 'blue']
console.log(deletedElements); //* orange



