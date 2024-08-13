//! reverse() Method :



//? reverse() Method :
// It is used to reverse the Array element.
// It does not have any argument.
// It returns the Original array with reverse elements.
// It affects the original Array.




// ==================================================================================================================
//? reverse() Method :
// (method) Array<string>.reverse(): string[]
//  Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// ==================================================================================================================



let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']


let reverseArr = colors.reverse();




console.log(reverseArr);   //*['orange'','yellow','pink','blue','green''red']

//* It affects the original Array.
console.log(colors);    //*['orange'','yellow','pink','blue','green''red']
