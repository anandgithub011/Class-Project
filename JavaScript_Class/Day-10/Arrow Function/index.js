console.log("Hi JavaScript");

// ARROW Function ()=>
//  An Arrow function in JavaScript, introduced in ES6, offers a concise syntax for defining function expression using =>

// ->Arrow function reduces the size of code.
// ->It increases the readability of code.

// let demo = ()=>{
//     console.log("Hi I am Arrow function");
// }
// demo();

// =====Rules of Arrow Fnction=================//
// 1. Arrow function without parameter:

// let demo = ()=>{
//     console.log("Hi");
// }
// demo();

// 2. Arrow function with single parameter:

// let demo = a =>{
//     console.log("Hi");
//     console.log(a);
// }
// demo(10);

// 3. Arrow function with multiple parameter:

// let demo = (a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// demo(10,11,12);

// 4. Arrow function with default parameter:

// let demo = (a, b, c = 33) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
// demo(11,22);










// IIFE (Immediate Invoke Function Expression): 
// IIFE are JavaScript function that are executed immediately after they are defined. And it is executed only one time.




// Syntax:

// ================= Arrow function as a IIFE===================//

// (()=>{
//     console.log("Hi Arrow Function IIFE")
// })()


//=================== Named Function as a IIFE==========================//

// (function demo(){
//     console.log("Hi Named function IIFE");
// })()



// ================== Anonymous Function as IIFE:===========================//

// (function (){
//     console.log("Hi Anonymous Function IIFE");
// })()


























// (function(){
//     console.log("Hi IIFE");
//     var a = 10;
// })();

// function demo(){
//     console.log(a); // Uncaught Reference Error: a is not defined.
// }
// demo();
