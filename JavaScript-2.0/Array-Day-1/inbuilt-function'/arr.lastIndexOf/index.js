
// lastIndexOf(arg1,arg2) Method: 
// It is used to get the index-position from the given element in 1st-argument.

// By default it searchs from last index of the Array, and going backward direction to find the element.

// It accepts two arguments, where the 
// 1st-argument is the element to be searching And, the
// 2nd argument is the index position from where to start the search and goes backward.
// it returns the index position of the element,if the element is present ,else it returns -1(by default).
// It does not affect original array.






// lastIndexOf(arg1,arg2) Method: 
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.



let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //(6) ['red','green','blue','pink','yellow','orange'];

let indexPosition1 = colors.lastIndexOf('pink');
let indexPosition2 = colors.lastIndexOf('pink',4);
let indexPosition3 = colors.lastIndexOf('blue',1);
let indexPosition4 = colors.lastIndexOf('yellow',3);
let C = colors.indexOf('pink');


console.log(indexPosition1);  // 3  (index-position)

console.log(indexPosition2);  // 3 (index-position)

console.log(indexPosition3);  // -1 (by default)

console.log(indexPosition4);  // -1 (by default)

console.log(colors);  //(6) ['red','green','blue','pink','yellow','orange']lastI