

// splice Method:Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @param items — Elements to insert into the array in place of the deleted elements.

// @returns — An array containing the elements that were deleted.

// splice method is used to add the elements or delete the elements from the array, based on index position.

// splice method accepts n-numbers of argument, where the
// >> 1st-argument is the index-position where the add the element or delete the elements.
// >> 2nd-argument is the number of elements to be deleted.
// >> From 3rd-arguments all the elements are new elements to be added where you start the index-position in 1st argument.
// splice methods return an array of deleted elements.
// If you don't want to delete any element then pass 0 to the 2nd-argument.
// if you don't want to add new elements just pass only two-arguments.
// If no element is deleted from the Array in splice method then returns empty Array [].
// If we pass only one argument all the elements will bedeleted from the given index number in 1st-argumnets.
// splice methods affects original array.

// example:

let colors = ['red','green','blue','pink','blue','orange','blue'];
// let colors = []; // output will be undefined

console.log(colors);  //(7) ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'blue']
console.log(colors.length); //7

console.log("=================================");


// // splice methods return an array of deleted elements.
// let deletedElements = colors.splice(3,4,'yellow','violet');

// console.log(colors);      //(5) ['red', 'green', 'blue', 'yellow', 'violet']
// console.log(deletedElements);      //(4) ['pink', 'blue', 'orange', 'blue']





// splice methods return an array of deleted elements.
// let deletedElements = colors.splice(3,2,'black','purple');

// console.log(colors);       //(7) ['red', 'green', 'blue', 'black', 'purple', 'orange', 'blue']

// console.log(deletedElements);        //(2) ['pink', 'blue']






// // splice methods return an array of deleted elements.
// let deletedElements = colors.splice(1,4,'purple');

// console.log(colors);      //--->(4) ['red', 'purple', 'orange', 'blue']

// console.log(deletedElements);      //--->(4) ['green', 'blue', 'pink', 'blue']






// splice methods return an array of deleted elements.
// let deletedElements = colors.splice(1,0,'pink');

// console.log(colors);     //--->(8) ['red', 'pink', 'green', 'blue', 'pink', 'blue', 'orange', 'blue']

// console.log(deletedElements);     //--->[]






// splice methods return an array of deleted elements.
// let deletedElements = colors.splice(4,2);

// console.log(colors);      //--->(5) ['red', 'green', 'blue', 'pink', 'blue']

// console.log(deletedElements);       //--->(2) ['blue', 'orange']





// splice methods return an array of deleted elements.
let deletedElements = colors.splice(2);

console.log(colors);       //--->(2) ['red', 'green']

console.log(deletedElements);        //--->(5) ['blue', 'pink', 'blue', 'orange', 'blue']






// splice methods return an array of deleted elements.
// let deletedElements = colors.splice(0);

// console.log(colors);       //--->[]

// console.log(deletedElements);      //--->(5) ['red', 'green','blue', 'pink', 'blue', 'orange', 'blue']