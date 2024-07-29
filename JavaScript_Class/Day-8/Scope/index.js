console.log("Hi JavaScript");

// ~ Block Scope:
// ~ Local Scope:






// ~ Block Scope:
// 
// variable and functions declared with let and const keywords have block Scope.

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



// -----=========================------------------//
    // ~ Local Scope:  Any Variable that you declare inside a function is said to have local Scope.

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

    
