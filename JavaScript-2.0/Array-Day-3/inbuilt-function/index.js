
//! how to check the condition either truthy and falsy.=========

// if(-1){  //truthy/falsy
//     console.log("hello");
// }
// else{
//     console.log("No")
// }

// if(null-4){   // truthy/falsy
//     console.log("hello");
// }
// else{
//     console.log("No")
// }

// console.log(typeof(null-4)); //number
// console.log(typeof(undefined-4)); //number
// console.log(typeof null-4); //NaN

// ! inbuilt function-method  =================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//!push():

//? push() Method:
// Appends/Insert new elements to the end of an array, and returns the new length of the array.
// push method is used to add the new elements to the existing Array.
// push method always adds the element at the end of the Array.
// push methods accept n-numbers of argument, where the arguments are new elements to be added.
// push method returns new lengthof the Array.
// push methos affects original Array.


// ==============================================================================================
//? push() Method:
// (method) Array<string>.push(...items: string[]): number
// Appends new elements to the end of an array, and returns the new length of the array.
// @param items — New elements to add to the array.

// ==============================================================================================







// let colors = ['red','green','blue','pink','blue','orange'];

// console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
// console.log(colors.length); //*6

// console.log("=================================");

// // colors.push("purple",'black');

// //?push() method: When we use this push() method and assigned into a variable then variable return the length of the array.
// let newLength = colors.push("purple",'black');

// console.log(colors);  //*(8) ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'purple', 'black']

// console.log(newLength); //*8














//! unshift() Method:

//?unshift() Method:
//  Inserts new elements at the start of an array, and returns the new length of the array.
// unshift() method is used to add the new elements to the existing Array.
// unshift() method always adds the element starting of the Array.
// unshift() methods accept n-numbers of argument, where the arguments are new elements to be added.
// unshift() method returns new length of the Array.
// unshift() methos affects original Array.


// ===========================================================================================
//?unshift() Method:
// (method) Array<string>.unshift(...items: string[]): number
// Inserts new elements at the start of an array, and returns the new length of the array.

// @param items — Elements to insert at the start of the array.

// ===========================================================================================




// let colors = ['red','green','blue','pink','blue','orange'];

// console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
// console.log(colors.length); //*6


// console.log("-------------==================-----------");

// //? unshift() method returns new length of the Array.
// let newLength = colors.unshift('purple','black');

// console.log(colors);  // * (8) ['purple', 'black', 'red', 'green', 'blue', 'pink', 'blue', 'orange']
// console.log(newLength);// *8









//!pop() Method: 

//? reverse of shift() method >>>>>>>>>>>>>>>>>>>>>.

//? pop() Method: 
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// >>>>>>>>>>>>
// pop() method is used to remove the last element of the Array.
// pop() method doesn't have any argument.
// pop() method returns the deleted element/removed element.
// pop() method affects original Array.

//* Note: If Array is empty then, pop() and shift() methods returned undefined.





// ===============================================================================================
//? pop() Method: 
// (method) Array<string>.pop(): string | undefined
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// ===============================================================================================





// let colors = ['red','green','blue','pink','blue','orange'];
// // let colors = []; //* output will be undefined

// console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
// console.log(colors.length); //*6

// console.log("=================================");


// let deletedElements = colors.pop();

// console.log(colors); //* (5) ['red', 'green', 'blue', 'pink', 'blue']
// console.log(deletedElements); //* orange







//! shift() Method:


// Reverse of pop() method>>>>>>>>>>>>>>>>>>>.

//? shift() Method:
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// >>>>>>>>>>>>
// shift() method is used to remove the first element of the Array.
// shift() method doesn't have any argument.
// shift() method returns the deleted element/removed element.
// shift() method affects original Array.

// *Note: If Array is empty then, pop() and shift() methods returned undefined.








// ========================================================================================
//? shift() Method:
// (method) Array<string>.shift(): string | undefined
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// ========================================================================================






// let colors = ['red','green','blue','pink','blue','orange'];
// // let colors = []; // output will be undefined

// console.log(colors);  //*(6) ['red', 'green', 'blue', 'pink', 'blue', 'orange']
// console.log(colors.length); //*6

// console.log("=================================");


// //* shift() method returns the deleted element/removed element.
// let deletedElements = colors.shift();

// console.log(colors); //*  (5) ['green', 'blue', 'pink', 'blue', 'orange']
// console.log(deletedElements); //*red














//! splice Method:


//? splice Method:
// splice method is used to add the elements or delete the elements from the array, based on index position.

// splice method accepts n-numbers of argument, where the
// >> 1st-argument is the index-position where the add the element or delete the elements.
// >> 2nd-argument is the number of elements to be deleted.
// >> From 3rd-arguments all the elements are new elements to be added where you start the index-position in 1st argument.
// splice methods return an array of deleted elements.
// If you don't want to delete any element then pass 0 to the 2nd-argument.
// if you don't want to add new elements just pass only two-arguments.
// If no element is deleted from the Array in splice method then returns empty Array [].
// If we pass only one argument all the elements will be deleted from the given index number in 1st-argumnets.
// splice methods affects original array.





// ===============================================================================================
//? splice Method:
// (method) Array<string>.splice(start: number, deleteCount?: number): string[] (+1 overload)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// @param start — The zero-based location in the array from which to start removing elements.

// @param deleteCount — The number of elements to remove.

// @returns — An array containing the elements that were deleted.

// ===============================================================================================







// example:

// let colors = ['red','green','blue','pink','blue','orange','blue'];
// // let colors = []; // output will be undefined

// console.log(colors);  //*(7) ['red', 'green', 'blue', 'pink', 'blue', 'orange', 'blue']
// console.log(colors.length); //*7

// console.log("=================================");


//~splice methods return an array of deleted elements.
// let deletedElements = colors.splice(3,4,'yellow','violet');

// console.log(colors);      //*(5) ['red', 'green', 'blue', 'yellow', 'violet']
// console.log(deletedElements);      //*(4) ['pink', 'blue', 'orange', 'blue']





//~ splice methods return an array of deleted elements.
// let deletedElements = colors.splice(3,2,'black','purple');

// console.log(colors);       //*(7) ['red', 'green', 'blue', 'black', 'purple', 'orange', 'blue']

// console.log(deletedElements);        //*(2) ['pink', 'blue']






//~splice methods return an array of deleted elements.
// let deletedElements = colors.splice(1,4,'purple');

// console.log(colors);      //*--->(4) ['red', 'purple', 'orange', 'blue']

// console.log(deletedElements);      //*--->(4) ['green', 'blue', 'pink', 'blue']






//~splice methods return an array of deleted elements.
// let deletedElements = colors.splice(1,0,'pink');

// console.log(colors);     //*--->(8) ['red', 'pink', 'green', 'blue', 'pink', 'blue', 'orange', 'blue']

// console.log(deletedElements);     //*--->[]






//~ splice methods return an array of deleted elements.

// let deletedElements = colors.splice(4,2);
// console.log(colors);  //*--->(5) ['red', 'green', 'blue', 'pink', 'blue']

// console.log(deletedElements);   //*--->(2) ['blue', 'orange']





//~ splice methods return an array of deleted elements.
// let deletedElements = colors.splice(2);

// console.log(colors);   //*--->(2) ['red', 'green']

// console.log(deletedElements);   //*--->(5) ['blue', 'pink', 'blue', 'orange', 'blue']






// ~splice methods return an array of deleted elements.
// let deletedElements = colors.splice(0);

// console.log(colors);   //*--->[]

// console.log(deletedElements);  //*--->(5) ['red', 'green','blue', 'pink', 'blue', 'orange', 'blue']
















//! slice(arg1,arg2) Method:

//? slice(arg1,arg2) Method:
// It is used to cut the part of the array.
// It accepts only two-arguments,where the 1st-argument is index-position, from where to start the cutting And,
// 2nd-argument is n-index positiojn till where to cut, but second argument is excluded.
// 1st-argument is included and the 2nd-argument is excluded index-position.

// it returns the array of sliced/removed element.

// It doesn't affect the original array.



// ==========================================================================================================
//? slice(arg1,arg2) Method:
//  Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// @param start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @param end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
// ==========================================================================================================



// let colors = ['red','green','blue','pink','yellow','orange'];


// let slicedElement = colors.slice(2,5);  


// console.log(colors);  //*  (6)['red','green','blue','pink','yellow','orange'];

// console.log(slicedElement);  // *(3) ['blue','pink','yellow']












//! includes(arg1,arg2) Method:

//? includes(arg1,arg2) Method:
// It is used to check whether the given element is present or not inside the Array.
// It accepts two arguments where the 1st-argument is element to searching purpose, 2nd-argument is index-position from where to start the search of element.

// If we dont pass 2nd-argumrnt then its start searching the element from 0-index.
// It returns a boolean value true, if the element is present else, it returns false.
// It doesn't affect the original Array





// ================================================================================================================
//? includes(arg1,arg2) Method:
// (method) Array<string>.includes(searchElement: string, fromIndex?: number): boolean
// Determines whether an array includes a certain element, returning true or false as appropriate.

// @param searchElement — The element to search for.

// @param fromIndex — The position in this array at which to begin searching for searchElement.

// ================================================================================================================





// let colors = ['red','green','blue','pink','yellow','orange'];


// let slicedElement1 = colors.includes('blue',3);  
// let slicedElement2 = colors.includes('blue');  


// console.log(colors);  //*  (6)['red','green','blue','pink','yellow','orange'];

// console.log(slicedElement1);  //* false
// console.log(slicedElement2);  //* true

















//! indexOf(arg1,arg2) Method:

//? indexOf(arg1,arg2) Method:
//  It is used to get the index-position from the given element in 1st-argument.

// It accepts two arguments, where the 
// 1st-argument is the element to be searching And, the
// 2nd argument is the index position from where to start the search and going towards
// If we don't pass 2nd-argument then, it searchs the element from 0-index.
// it returns the index position of the element,if the element is present ,else it returns -1(by default).
// It does not affect original array.





// ===================================================================================================

//? indexOf(arg1,arg2) Method:
// (method) Array<string>.indexOf(searchElement: string, fromIndex?: number): number*
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
// =====================================================================================================





// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange'];

// let indexPosition1 = colors.indexOf('pink');
// let indexPosition2 = colors.indexOf('pink',4);
// let indexPosition3 = colors.indexOf('blue',3);
// let indexPosition4 = colors.indexOf('yellow',4);
// let C = colors.indexOf('pink');


// console.log(indexPosition1);  //* 3  (index-position)
// console.log(indexPosition2);  //* -1 (by default)
// console.log(indexPosition3);  //* -1 (by default)
// console.log(indexPosition4);  //* 4 (index-position)
// console.log(colors);  //*(6) ['red','green','blue','pink','yellow','orange'];













//! lastIndexOf(arg1,arg2) Method: 

//* lastIndexOf(arg1,arg2) Method: 
// It is used to get the index-position from the given element in 1st-argument.

// By default it searchs from last index of the Array, and going backward direction to find the element.

// It accepts two arguments, where the 
// 1st-argument is the element to be searching And, the
// 2nd argument is the index position from where to start the search and goes backward.
// it returns the index position of the element,if the element is present ,else it returns -1(by default).
// It does not affect original array.





// =====================================================================================================
//* lastIndexOf(arg1,arg2) Method: 
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

// @param searchElement — The value to locate in the array.

// @param fromIndex — The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

// =====================================================================================================


// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange'];

// let indexPosition1 = colors.lastIndexOf('pink');
// let indexPosition2 = colors.lastIndexOf('pink',4);
// let indexPosition3 = colors.lastIndexOf('blue',1);
// let indexPosition4 = colors.lastIndexOf('yellow',3);
// let C = colors.indexOf('pink');


// console.log(indexPosition1);  //* 3  (index-position)

// console.log(indexPosition2);  //* 3 (index-position)

// console.log(indexPosition3);  //* -1 (by default)

// console.log(indexPosition4);  //* -1 (by default)

// console.log(colors);  //*(6) ['red','green','blue','pink','yellow','orange']













//! at(arg1) Method:

//? at(arg1) Method:
// It is used to get the element of array, based on their index-position
// 
// It accepts only one argument, where the argument is index-position.
// It returns the element present in the given index-position as a argument, if the index-position is available, else returns undefined.

// It does not affect Original Array.





// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange'];


// let element1 = colors.at(3);  
// console.log(element1);  //*pink

// let element2 = colors.at(8);  
// console.log(element2);  //* undefined  (by default)

// let element3 = colors.at(-2);    //*(taking last index as a -1 and goes backward direction. so, -2 is yellow)
// console.log(element3);  //* yellow 


// console.log(colors); //* (6) ['red','green','blue','pink','yellow','orange'];

















//! concat(arg1,....) Method:


//? concat(arg1,....) Method:
// It is used to join the new elements to the existing array, after the last index of an Array.
// It accepts n-numbers of arguments, where the arguments are new elements to be joined.
// It returns an array of new joined element.
// It does not affect the Original Array.



// ======================================================================================================================
//? concat(arg1,....) Method:
// (method) Array<string>.concat(...items: (string | ConcatArray<string>)[]): string[] (+1 overload)
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// @param items — Additional arrays and/or items to add to the end of the array.

// ======================================================================================================================



// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']


// let joinedElement1 = colors.concat('xyz','mno');
// let joinedElement2 = colors.concat(['jkl','abc','pqr']);


// console.log(joinedElement1); //* (8) ['red','green','blue','pink','yellow','orange','xyz','mno']

// console.log(joinedElement2); //*(9) ['red','green','blue','pink','yellow','orange','jkl','abc','pqr']


// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']














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



// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']


// let reverseArr = colors.reverse();




// console.log(reverseArr);   //*['orange'','yellow','pink','blue','green''red']

// //* It affects the original Array.
// console.log(colors);    //*['orange'','yellow','pink','blue','green''red']














// !fill(arg1,arg2,arg3)  Method:


//? fill(arg1,arg2,arg3)  Method:
//  It is used to replace array elements with new elements, which is passed in 1st-argument.

// it accepts three arguments where the
// 1st-arguments is new element. and the
// 2nd-argument is index position, where to start and replace, and the
// 3rd-argument is end index-positon which is excluded.

// It returns an array of newly replace elements.
// It affects the original array.




// ====================================================================================================================
//? fill(arg1,arg2,arg3)  Method:
// (method) Array<string>.fill(value: string, start?: number, end?: number): string[]
// Changes all array elements from start to end index to a static value and returns the modified array

// @param value — value to fill array section with

// @param start
// index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

// @param end
// index to stop filling the array at. If end is negative, it is treated as length+end.

// ====================================================================================================================





// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']

// // let newArr1 = colors.fill('black'); 
// // console.log(newArr1);  //* (6) (6) ['black', 'black', 'black', 'black', 'black', 'black']


// let fdccdc = colors.fill('dbbd',0,1);
// console.log(fdccdc);  //* (6) ['dbbd', 'green', 'blue', 'pink', 'yellow', 'orange']

// // *It affects the original array.
// console.log(colors);  //* (6) ['dbbd', 'green', 'blue', 'pink', 'yellow', 'orange']












//! join(arg1)  Method:


//? join(arg1)  Method:
//  It is used to seperate the array elements, with the specific seperator.
// It accepts one-argument of type string. And the argument is a seperator.
// It returns a string of seperated array elements.
// if we don't pass any argument by default it seperate with comma(,).

// It does not affect the Original Array.
// If we dont any seperator theb pass empty string("") as an argument.





// ==================================================================================================================
//? join(arg1)  Method:
// (method) Array<string>.join(separator?: string): string
// Adds all the elements of an array into a string, separated by the specified separator string.

// @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
// ==================================================================================================================




// let colors = ['red','green','blue','pink','yellow','orange'];

// console.log(colors); //*(6) ['red','green','blue','pink','yellow','orange']

// let seperateArr1 = colors.join("-");
// let seperateArr2 = colors.join("");
// let seperateArr3 = colors.join();


// console.log(seperateArr1);   //* red-green-blue-pink-yellow-orange
// console.log(seperateArr2);   //* redgreenbluepinkyelloworange
// console.log(seperateArr3);   //* red,green,blue,pink,yellow,orange














//! forEach(ele,index,Entire_Array) Method:


//? forEach(ele,index,Entire_Array) Method:
//  It is used to iterate array element at index position.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array.

//*forEach method always return undefined (by default);
// When we want to return any value don't use forEach Method.

//! Note: Use forEach() method only for iteration purpose or else use it as alternative of for-loop, for-in-loop, for-of-loop.

// The callback function of forEach method runs for every elements inside the array, that means it runs the total number of time the elements available inside the array.




// ========================================================================================================================
//? forEach(ele,index,Entire_Array) Method:
// (method) Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void

// Performs the specified action for each element in an array.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
// ========================================================================================================================



// let num = [3,6,1,7,4,19,2,9];

// let res = num.forEach((ele,index,Entire_Array)=> {

//     return 'hello';
// })
// console.log(res);  //* undefined






// let res = num.forEach((ele,index,Entire_Array)=> {
    
//     console.log("hello");  //* (length of element-times)hello will be printed
//     return 'hello';
// })

// console.log(res);  //* undefined




// let res = num.forEach((ele,index,Entire_Array)=> {

//     return 'hello';
// })

// console.log(res);  //* undefined














//! map(ele,index,Entire_Array) Method: 

//? map(ele,index,Entire_Array) Method: 
// It is used to perform modification on existing array of elements, index and entire Array.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array

// map method returns a new Array of values returned by the callback function.
// map method does not affect original array.






// ===============================================================================================================
//? map(ele,index,Entire_Array) Method: 
// (method) Array<number>.map<boolean>(callbackfn: (value: number, index: number, array: number[]) => boolean, thisArg?: any): boolean[]

// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value
//=======================================================================================================



// let num = [3,6,1,7,4,19,2,9];

// let res = num.map((ele,index,Entire_Array)=> {

//     console.log("hey"); //* hey will be printed 8-times
//     return 'hello';
// })

// console.log(res);  //*  ['hello','hello','hello','hello','hello','hello','hello','hello']




// let num = [3,6,1,7,4,19,2,9];

// let res = num.map((ele,index,Entire_Array)=> {

//     return ele + 3; 
    
// })
// console.log(res); //* [6,9,4,10,7,22,5,12]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.map((ele,index,Entire_Array)=> {

//     return ele > 3;
    
// })

// console.log(res);   //* [false,true,false,true,true,false,true];



















//?! filter(ele,index,Entire_Arr) Method:


//? filter(ele,index,Entire_Arr) Method:
// It is used to filter the array elements and get the element in new array based on the condition, whether true or false.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array.

// filter methods returns an array of element which satisfied the condition, whether its true or false;
// filter method  does not affect original Array.



// ================================================================================================================
//? filter(ele,index,Entire_Arr) Method:

// Returns the elements of an array that meet the condition specified in a callback function.

// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
//===============================================================================================================



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((ele,ind,Entire_Arr)=>{
//     return ele>4;
// })

// console.log(res);  //*[6,7,19,9]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((ele,ind,Entire_Arr)=>{
//     console.log("hey");  //(8-times) hey will be printed and empty Array.
// })
// console.log(res); //*[]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((ele,i,Entire_Arr)=>{
//     return i;
// })
// console.log(res); //*[6,1,7,4,19,2,9]
    
    
    
    
    
// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e,i)=>{
//     return e>4;  //* (true condition return that element in new array)
// })
// console.log(res);  //*(4) [6, 7, 19, 9]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e,i)=>{
//     return e-4;  
// })
// console.log(res);  //*(7) [3, 6, 1, 7, 19, 2, 9]



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return e+4;  //* (true)
// })
// console.log(res); //*[3,6,1,7,4,19,2,9]



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return "dsds";  //(true) 
// })
// console.log(res); //*[3,6,1,7,4,19,2,9]




// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return 2+undefined;  //* NaN(false)
    
// })
// console.log(res);  //*[]



// let num = [3,6,1,7,4,19,2,9];

// let res = num.filter((e)=>{
//     return 2;  //* (true)
    
// })
// console.log(res);   //*[3,6,1,7,4,19,2,9]








// ~problem===========================================================================================================

// problem: check if number is present inside the array, then print that number/element else, print undefined.
// let number = [3,6,1,7,4,19,2,9];

// function isNumAvailable(numArr){
//     for (let num of numArr){
//         if(num > 4){
//             return num;
//         }
//     }
// }

// let res = isNumAvailable(number);
// console.log(res); //*[6]


//~ problem: check if number is present inside the array, then print the index position, else print -1.

// let number = [3,6,1,7,4,19,2,9];

// function isNumAvailable(numArr){

//     for(let i in numArr){

//         if(numArr[i] > 4){
//             return i;
//         }
//     }
//     return -1;   //* typeof number?
// }

// let res = isNumAvailable(number);
// console.log(res);  //*1
// console.log(typeof res);  //*string


// ~===========================================================================================================














//! find(ele,index,Entire_arr) method:


//? find(ele,index,Entire_arr) method:
// It is used to get the 1st occured element which satisfied the condition w.r.to true/false.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array

// find method returns the 1st occured element which satisfied the condition and stop the execution of callback function.
// If no element is satisfying the condition then returns undefined (by default).






// ===================================================================================================
//? find(ele,index,Entire_arr) method:
// (method) Array<number>.find(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number | undefined (+1 overload)
// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
// ===================================================================================================








// let number = [13,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return ele > 4;  //* (true)
// })

// console.log(res); //*6



// let number = [13,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return ele > 54; //* (false)
// })

// console.log(res); //* undefined (by default)




// let number = [123,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return 54; //(true)
//     // return "wedsf"; //* (true)
//     // return {}; //* (true)
//     // return []; //* (true)
//     // return -1; //* (true)
// })

// console.log(res); //* 123






















//! findInde(ele,index,Entire_arr) method:

//? findInde(ele,index,Entire_arr) method:
// It is used to get the index-position which satisfied the condition w.r.to true/false.

// It accept one-argument where the argument is a callback function.
// The callback function accepts three-parameter where, the 1st parameter is elements of array, the 
// 2nd-paframeter is index-position and the
// 3rd-parameter is Entire Array

// find method returns the index-position which satisfied the condition and stop the execution of callback function.
// If no element is satisfying the condition then returns -1(by default).






// ===================================================================================================
//? findIndex(ele,index,Entire_arr) method:
// (method) Array<number>.findIndex(predicate: (value: number, index: number, obj: number[]) => unknown, thisArg?: any): number
// Returns the index of the first element in the array where predicate is true, and -1 otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.

// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.

// ===================================================================================================




// let number = [3,6,1,7,4,19,2,9];

// let res = number.findIndex((ele,index,Entir_arr)=>{

//     return ele > 4;  //* (true)
// })

// console.log(res); //* 1


// let number = [3,6,1,7,4,19,2,9];

// let res = number.findIndex((ele,index,Entir_arr)=>{

//     return ele > 34;  //* (falsy value)
// })

// console.log(res); //*-1



// let number = [13,6,1,7,4,19,2,9];

// let res = number.findIndex((ele,index,Entir_arr)=>{

//     return 33; //* (truthy value)
// })

// console.log(res); //* 0




let number = [13,6,1,7,4,19,2,9];

let res = number.findIndex((ele,index,Entir_arr)=>{

    return -0; //* (falsy value)
})

console.log(res); //* -1 (by default)




// let number = [123,6,1,7,4,19,2,9];

// let res = number.find((ele,index,Entir_arr)=>{

//     return 54; //* (true)
//     // return "wedsf"; //(true)
//     // return {}; //(true)
//     // return []; //(true)
//     // return -1; //(true)
// })

// console.log(res); //* 123

