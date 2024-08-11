
//! includes(arg1,arg2) Method:



//* includes(arg1,arg2) Method:
// It is used to check whether the given element is present or not inside the Array.
// It accepts two arguments where the 1st-argument is element to searching purpose, 2nd-argument is index-position from where to start the search of element.

// If we dont pass 2nd-argumrnt then its start searching the element from 0-index.
// It returns a boolean value true, if the element is present else, it returns false.
// It doesn't affect the original Array





// ================================================================================================================
//* includes(arg1,arg2) Method:
// (method) Array<string>.includes(searchElement: string, fromIndex?: number): boolean
// Determines whether an array includes a certain element, returning true or false as appropriate.

// @param searchElement — The element to search for.

// @param fromIndex — The position in this array at which to begin searching for searchElement.

// ================================================================================================================





let colors = ['red','green','blue','pink','yellow','orange'];


let slicedElement1 = colors.includes('blue',3);  
let slicedElement2 = colors.includes('blue');  


// console.log(colors);  //*  (6)['red','green','blue','pink','yellow','orange'];

console.log(slicedElement1);  //* false
console.log(slicedElement2);  //* true