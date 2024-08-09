// unshift() Method:

//unshift() Method: Inserts new elements at the start of an array, and returns the new length of the array.
// unshift() method is used to add the new elements to the existing Array.
// unshift() method always adds the element starting of the Array.
// unshift() methods accept n-numbers of argument, where the arguments are new elements to be added.
// unshift() method returns new length of the Array.
// unshift() methos affects original Array.

let colors = ['red','green','blue','pink','blue','orange'];

console.log(colors);  //(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
console.log(colors.length); //6


console.log("-------------==================-----------");

// unshift() method returns new length of the Array.
let newLength = colors.unshift('purple','black');

console.log(colors);  //  (8) ['purple', 'black', 'red', 'green', 'blue', 'pink', 'blue', 'orange']
console.log(newLength);// 8



