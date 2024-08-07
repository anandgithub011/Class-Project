console.log("Hi JavaScript");




// (function demo(){
//     console.log("Hi, I am named and work as a IIFE");
// })();



// ==xxxxxxxxxx==========below syntax is incoorect===========xxxxxxxxxxxxxx//
// (let demo = ()=>{
//     console.log("Hi");
// })();





// (()=>{
//     console.log("Hi, I am arrow function and work as a IIFE");
// })();


// function parent(){
//     var a = 10;
//     let b = 20;

//     return function child(){
//         // let b = 44;
//         console.log(b);
//         // b = 22;
//         var a = 222;
//         console.log(a);
//         console.log(b);

//     }
// }
// cal()();


// var a = $;
// console.log(typeof $);

// console.log(typeof 2 + 2 * 2);


// HOF: A function takes one or more function as an, argument we are calling higher order function.
// Callback: A function passed as an argument into another function, we are calling callback function.

// Scope: Scope in javaScript refers to context area of code, which determine the accessibility of variables.

// Block Scope: Block scope refers to the code that is written inside a block, which is defined by a pair of curly braces {}, Basically variables and function are declared with the let and const keywords are limited to this block scope.

// Local Scope: If we declare any variables with var,let and const keywords inside that function then those variables can only be accessed within that scope is known as local scope or function scope.

// Global Scope: If we declare a variable with var keyword and the statement wriiten must be outside the function then the identifier is present inside the Global Scope.:

// Script Scope: If we declare a variable using let or const keywords thn your identifier will be present inside the script scope.

// Function: Function is a reusable block of code which is used to perform operation or particular task.

// As of now, I know 8-type of function.

// 1. Anonymous Function: Those function they don't have name is known as Anonymous function.

// 2. Named Function: Those function they have unique name is known as Named function.

// 3. Function with Expression: A anonymous function assigned to a identifier with using equal to expression, is known as Functuion with expression.

// 4. HOF: A function takes one function or multiple function as a argument is known as Higher Order Function.

// 5. Callback function: A function which is passed as an argument in another function, known as Callback Function.

// 6. Arrow Function: Arrow function in JavaScript is introduced in ES6, It is a concise syntax, which defines using => sumbol. and it is reduces the size of code and increases the code readability.

// 7. Nested Function: A function inside another function, known as Nested function.

// 8. IIFE (Immediate Invoke Function Expression): A function which is wrap inside the parenthesis() and immediate invoke the function using this parenthesis().And it is only one time execute.




function demo(a,b,c,cb1,cb2,cb3,cb4){
    cb1(a,b,c);
    cb2(a,b,c);
    cb3(a,b,c);
    cb4(a,b,c);
}

demo(10,20,30,function(x,y,z){
    console.log(x+y+z);
},function(x,y,z){
    console.log(z-y);
},(x,y,z)=>{
    console.log(x+z);
},function name(x,y,z){
    console.log((z));
})