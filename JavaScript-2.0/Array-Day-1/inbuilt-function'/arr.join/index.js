


// join(arg1)  Method: It is used to seperate the array elements, with the specific seperator.
// It accepts one-argument of type string. And the argument is a seperator.
// It returns a string of seperated array elements.
// if we don't pass any argument by default it seperate with comma(,).

// It does not affect the Original Array.
// If we dont any seperator theb pass empty string("") as an argument.





// ==================================================================================================================


// join(arg1)  Method: 





// ==================================================================================================================






let colors = ['red','green','blue','pink','yellow','orange'];

console.log(colors); //(6) ['red','green','blue','pink','yellow','orange']




let seperateArr1 = colors.join("-");
let seperateArr2 = colors.join("");
let seperateArr3 = colors.join();



console.log(seperateArr1);   //'red-green-blue-pink-yellow-orange
console.log(seperateArr2);   //'redgreenbluepinkyelloworange
console.log(seperateArr3);   //'red,green,blue,pink,yellow,orange