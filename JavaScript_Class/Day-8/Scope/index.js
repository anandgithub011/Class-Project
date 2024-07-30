console.log("Hi JavaScript");

// =============String Operator.============= //

// let demo = "A"; //65
// let demo1 = "a"; //97
// console.log(demo > demo1); //(65 > 97) //false


// let demo = "Hi";
// let demo1 = "World";
// let res = demo +" "+demo1;
// console.log(res);


// let demo = "200";
// let demo1 = 100;
// console.log(demo > demo1);  //true
// console.log(typeof (demo > demo1));  //boolean



// ~ ==================Logical Operators=============================//
// Logical operators are used to determine the logic between variables or values.


// ~ =============== && (AND operator) ==========//

// ***********************************
// True + True = True
// True + False = False
// False + True = False
// False + False = False
// ***********************************



// let x = 100;
// let y = 200;
// console.log(x < 101 && y < 300); //true



let x = 100;
let y = 200;
console.log(x < 20 && y < 300); //false





// ~ =============== || (OR operator) ==========//


//  **************************************
// True + False = True
// False + True = True
// False + False = False
// True + True = True
// ***************************************


// let x = 100;
// let y = 200;
// console.log(x < 200 || y < 500); //true



// let x = 100;
// let y = 200;
// console.log(x > 200 || y < 500); //true


// let x = 100;
// let y = 200;
// console.log(x > 200 || y > 500); //false




// ~ SCOPE: Scope in JavaScript refers to the current context of code, which determine the accessibility of variables to JavaScript.

// GLobal Scope=================//
// Script Scope=================//
// Function Scope================//




// ==================GLobal Scope : ================================//
// If you are declaraing any identifier outside any function by using "var" keyword then your identifier will present in the global scope.




// ===================Script Scope : ===============================//
// If you are declaring any identifier by using let and "const" keyword then your identifier will present inside the Script scope.

// var a = 100;
// let b = 200;
// const c = 300;

// console.log(a);
// console.log(b);
// console.log(c);



//==================== Function Scope : ==============================//
// If you declare a variable with var inside a function, it is scoped to that function only.

// function myFunction() {
//     var functionVar = "I am a function-scoped variable";
//     console.log(functionVar); // Accessible here
// }

// myFunction();
// console.log(functionVar); // ReferenceError: functionVar is not defined









// ~ ============Block Scope:=========================================//
// ~ ============Local Scope: ==========================================//


// ~Block Scope : =========================================//
// ~ Block Scope:  Block Scope in JavaScript refers to the scope of variables and functions that are defined within a block code, such as within a pair of curly braces {}, Variables and functions declared with let and const keywords have block Scope.

// var a = 100;
// let b = 200;
// const c = 300;

// {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         var d = 400;
//         let e = 500;
//         const f = 600;

//     }

// console.log(d);
// console.log(e);  //index.js:28  Uncaught ReferenceError: e is not defined
// console.log(f);   //index.js:29  Uncaught ReferenceError: f is not defined



// ~Local Scope: ==========================================//
//  Any Variable that you declared inside a function is said to have local Scope.

    // var a = 100;
    // let b = 200;
    // const c = 300;

    // function demo(){

    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
        
    //     var d = 400;
    //     let e = 500;
    //     const f = 600;

    // }
    // demo();

    // console.log(d);   //index.js:51  Uncaught ReferenceError: d is not defined
    // console.log(e);  //index.js:51  Uncaught ReferenceError: e is not defined
    // console.log(f);   //index.js:51  Uncaught ReferenceError: f is not defined

    
