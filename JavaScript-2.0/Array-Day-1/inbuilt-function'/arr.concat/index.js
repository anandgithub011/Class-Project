
//! concat(arg1,....) Method:


//* concat(arg1,....) Method:
// It is used to join the new elements to the existing array, after the last index of an Array.
// It accepts n-numbers of arguments, where the arguments are new elements to be joined.
// It returns an array of new joined element.
// It does not affect the Original Array.



// ======================================================================================================================
//* concat(arg1,....) Method:
// (method) Array<string>.concat(...items: (string | ConcatArray<string>)[]): string[] (+1 overload)
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// @param items — Additional arrays and/or items to add to the end of the array.

// ======================================================================================================================



let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']


let joinedElement1 = colors.concat('xyz','mno');
let joinedElement2 = colors.concat(['jkl','abc','pqr']);


console.log(joinedElement1); //* (8) ['red','green','blue','pink','yellow','orange','xyz','mno']

console.log(joinedElement2); //*(9) ['red','green','blue','pink','yellow','orange','jkl','abc','pqr']


console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']
