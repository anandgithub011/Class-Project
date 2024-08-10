
// slice(arg1,arg2) Method:
// It is used to cut the part of the array.
// It accepts only two-arguments,where the 1st-argument is index-position, from where to start the cutting And,
// 2nd-argument is n-index positiojn till where to cut, but second argument is excluded.
// 1st-argument is included and the 2nd-argument is excluded index-position.

// it returns the array of sliced/removed element.

// It doesn't affect the original array.




// slice(arg1,arg2) method: Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.



let colors = ['red','green','blue','pink','yellow','orange'];


let slicedElement = colors.slice(2,5);  


console.log(colors);  //  (6)['red','green','blue','pink','yellow','orange'];

console.log(slicedElement);  // (3) ['blue','pink','yellow']