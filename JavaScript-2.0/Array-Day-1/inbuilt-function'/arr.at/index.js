

// at(arg1) Method:
// It is used to get the element of array, based on their index-position
// 
// It accepts only one argument, where the argument is index-position.
// It returns the element present in the given index-position as a argument, if the index-position is available, else returns undefined.

// It does not affect Original Array.





let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //(6) ['red','green','blue','pink','yellow','orange'];


let element1 = colors.at(3);  
let element2 = colors.at(8);  
// let element3 = colors.at(-2);  



console.log(element1);  //pink
console.log(element2);  // undefined  (by default)
// console.log(element3);  // orange 


console.log(colors); // //(6) ['red','green','blue','pink','yellow','orange'];
