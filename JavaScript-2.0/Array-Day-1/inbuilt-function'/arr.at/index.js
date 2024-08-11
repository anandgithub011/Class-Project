
//! at(arg1) Method:

//* at(arg1) Method:
// It is used to get the element of array, based on their index-position
// 
// It accepts only one argument, where the argument is index-position.
// It returns the element present in the given index-position as a argument, if the index-position is available, else returns undefined.

// It does not affect Original Array.





let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange'];


let element1 = colors.at(3);  
console.log(element1);  //*pink

let element2 = colors.at(8);  
console.log(element2);  //* undefined  (by default)

let element3 = colors.at(-2);    //*(taking last index as a -1 and goes backward direction. so, -2 is yellow)
console.log(element3);  //* yellow 


console.log(colors); //* (6) ['red','green','blue','pink','yellow','orange'];
