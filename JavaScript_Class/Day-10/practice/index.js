console.log("Hi JavaScript");


(function demo(){
    console.log("Hi, I am named and work as a IIFE");
})()


(let demo = ()=>{
    console.log("Hi");
})();







(()=>{
    console.log("Hi, I am arrow function and work as a IIFE");
})()


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

console.log(typeof 2 + 2 * 2);