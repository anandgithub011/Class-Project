// prompt("dwkjb")


// Truthy and Falsy Value in JavaScript:

// Falsy Values:  false,0,-0,undefined, NaN, null,""(empty string)

// Truthy Value: any number, any string,{}(onject), [](Array)

// Summary
// Truthy values: Values that evaluate to true in a Boolean context. Examples include non-zero numbers, non-empty strings, objects, and arrays.
// Falsy values: Values that evaluate to false in a Boolean context. Examples include false, 0, "", null, undefined, and NaN.
// Understanding truthy and falsy values is essential for controlling the flow of your JavaScript programs and making decisions based on dynamic conditions.



// example:
// let name1 = "Anand";

// if (name1) {
//     console.log("Name is truthy"); // This will be logged because "Anand" is a non-empty string/truthy value.
// }

// let age = 0;

// if (age) {
//     console.log("Age is truthy");
// } else {
//     console.log("Age is falsy"); // This will be logged because 0 is falsy
// }


// let s = "reactJs";  //truthy value

// //if(reactJs/truthy value)---> if(true)
// if(s){
//     s = "JavaScript";
//     console.log(s);  // JavaScript
// }
// else{
//     console.log("s variable, already having some values");
// }


// let s = "reactJs";   //truthy value

// //if(not true)--->if(false)
// if(!s){
//     s = "JavaScript";
//     console.log(s);
// }
// else{
//     console.log("s variable, already having some values");  //s variable, already having some values
// }




// let s = "";  //(empty string is falsy value)

// // if(falsy value)===>if(false)
// if(s){
//     s = "JavaScript";
//     console.log(s);    
// }
// else{
//     console.log("s variable already having some values.");  //s variable already having some values.
// }



// let s = "";  //

// // if(not falsy value)===>if(true)
// if(!s){
//     s = "JavaScript";
//     console.log(s);    //JavaScript
// }
// else{
//     console.log("s variable already having some values.")
// }



// let num = 0;  //(0 is falsy value)--->

// // if(not false)--->if(true);
// if(num === 0){  // This (num === 0) is called Donkey method in javaScript.==========>

//     console.log("Neutral number");   //Neutral number
// }
// else if(num > 0){
//     console.log("Positive number");
// }
// else{
//     console.log("Negative number");
// }





// let num = 0;  //(0 is falsy value)--->


// // if(not false)--->if(true);
// if(!num){
//     console.log("Neutral number");   //Neutral number
// }
// else if(num>0){
//     console.log("Positive number");
// }
// else{
//     console.log("Negative number");
// }




// ----======================**************====================--------------------//




// Array: Array is an inbuilt object in javaScript which stores both homogeneous and hetrogenous type of data.


// ===> In JavaScript array size is not fixed.
// ===> in JavaScript Array is dynamic and mutable.
// ===> In JS Array value will be stored based on index position. and the value is also known as element of the Array.

// ===> The first element of the array is 0, indexing-position.

// NOTE: Array is used to store multiple values in a style variable.


let arr = [20,40,50,70,45];
console.log(arr);  //[20, 40, 50, 70, 45]

// ===> The total length of the array is equal the total number of element inside Array.
console.log(arr.length);  //5

console.log(arr[0]);  //20

console.log(arr[1]);   //40

console.log(arr[3]);  //70


// ===> And the last element of the array will be stored in array.length-1th.
console.log(arr[arr.length-1]);   //45


// ===> If you are trying to access any index which is not available inside the array, then we get undefined.
console.log(arr[11]);  //undefined

arr[2] = 999;



// ===> In JS Array, there is no continuous memory location, that means we can skip the indexes to store the elements/values. And The indexes which is skipped will be having undefined.

arr[12] = 111;
console.log(arr); //  [ 20, 40, 50, 70, 45, <7 empty items>, 111 ]
console.log(arr[6]);  //undefined