//!push():

//? push() Method:
// Appends/Insert new elements to the end of an array, and returns the new length of the array.
// push method is used to add the new elements to the existing Array.
// push method always adds the element at the end of the Array.
// push methods accept n-numbers of argument, where the arguments are new elements to be added.
// push method returns new lengthof the Array.
// push methos affects original Array.


// ==============================================================================================
//? push() Method:
// (method) Array<string>.push(...items: string[]): number
// Appends new elements to the end of an array, and returns the new length of the array.
// @param items — New elements to add to the array.

// ==============================================================================================







let colors = ['red','green','blue','pink','blue','orange'];

console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
console.log(colors.length); //*6

console.log("=================================");

// colors.push("purple",'black');

//?push() method: When we use this push() method and assigned into a variable then variable return the length of the array.
let newLength = colors.push("purple",'black');

console.log(colors);  //*(8) ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'purple', 'black']

console.log(newLength); //*8