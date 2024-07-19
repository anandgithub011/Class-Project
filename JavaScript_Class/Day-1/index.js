// console.log("Hi javaScript");
//! What is javaScript?
// ? JavaScript is a object based and functional programming language which is
//& 1. Dynamic in nature
//& 2. Synchronous
//& 3. Interpreted
//& 4. Single threaded
//& 5. Weekly and loosely typed programming lang.



// ?=============var keyword==================

// & DECLARATION
// var a ;
// & INITIALIZATION
// a = 100;
// console.log(a)//100

// ! DECLARATION and INITIALIZATION into the same line is POSSIBLE
// var a = 100;
// console.log(a)//100


// ! RE-DECLARATION is POSSIBLE
// var a;
// console.log(a)


// ! RE-INITIALIZATION is POSSIBLE
// a = "Hi how are you ?"
// console.log(a)


// ! RE-DECLARATION and RE-INITIALIZATION into the same line POSSIBLE or NOT
// var a = "CuteBoy👻👻"
// console.log(a)





// & ==========letkeyword=========================

// ! DECLARATION in different line
// let a;


// ! INITIALIZATION
// a = 100;
// console.log(a);


// ! DECLARATION and INITIALIZATION into same line POSSIBLE
// let a = 100;
// console.log(a)


// ! Re-INITIALIZATION is POSSIBLE
// a = "HI"
// console.log(a)


// ! Re-DECLARATION is NOT POSSIBLE
// let a
//Cannot Redeclare block-scoped variable 'a'////Uncaught SyntaxError: Identifier 'a' has already been declared


// ! Re-DECLARATION and Re-INITIALIZATION into the same line NOT POSSIBLE
// let a = 200;
// console.log(a);







//& ======== const keyword========

// ! DECLARATION in diffenet line NOT POSSIBLE
// const c;


// ! INITIALIZATION in different line is NOT POSSIBLE
// c = 100;


// ! DECLARATION and INITIALIZATION into the same line
const c = 100;
// console.log(c)


// ! Re-DECLARATION is NOT POSSIBLE
// const c;


// ! Re-INITIALIZATION is
// c = 200;
// console.log(c)//TypeError: Assignment to constant variable.


// ! Re-DECLARATION and Re-INITIALIZATION same line
const c = 200;
// Cannot redeclare block-scoped variable 'c'
// Uncaught SyntaxError: Identifier 'c' has already been declared 