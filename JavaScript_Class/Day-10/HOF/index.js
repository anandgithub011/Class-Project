console.log("Hi");

// HOF: A function which accept another function as an argument is known as Highr Order Function (HOF).
// callback Function: A function which is passed as a value/parameter to another function is known as callback function.


// examples:

// function HOF(){
//     console.log("Hi I am HOF");
// }
// HOF(callback());


// function callback(){
//     console.log("Hi I am Callback");
// }


//============== Examples of Higher order function and callback function.=================================//

// function demo(a,b,callback){

//     console.log(a);
//     console.log(b);
//     callback(100,200);

// }

// demo(10,20, function(x,y){

//     console.log("Hiiiiiiiii");
//     console.log(x);
//     console.log(y);

// })

// ==========================================================================


// function demo1(a,b,callback){

//     callback(a,b);
// }

// demo1(10,20,function(a,b){

//     console.log(a+b);
// })



// ===================================================================


// let length = parseInt(prompt("Enter Length"));
// let breadth = parseInt(prompt("Enter Breadth"));

// function mathOperation(l,b,callback){
//     callback(l,b);

// }

// mathOperation(length,breadth, function(l,b){
//     console.log(`Area of rectangle, which of length is ${l} and breadth is9 ${b} is equal ${l*b}`);
// })





// .map is a inbuilt function and now it is a higher order function because it accept another function as a argument

// let arr = [1,2,3,4,5];

// let doubled = arr.map(function(num){
//     return num*4;
// })

// console.log(doubled);


