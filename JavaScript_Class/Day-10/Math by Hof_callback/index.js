// console.log("Hi JavaScript");



let l = parseInt(prompt("Enter length"));
let b = parseInt(prompt("Enter breadth"));
let h = parseInt(prompt("Enter height"));
let a = parseInt(prompt("Enter Side"));
let r = parseInt(prompt("Enter radius"));


function mathOperation(a,l,b,h,r,callback){
    callback(a,l,b,h,r);

}

mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of triangle, which breadth is ${b} and height is ${h} and Area of triangle is = ${0.5*b*h}`);
})


mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of Square, which side is ${a} and Area of square is = ${a**2}`);
})


mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of Rectangle, which breadth is ${b} and height is ${h} and Area of Rectangle is = ${b*h}`);
})


mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of Parallelogram, which breadth is ${b} and height is ${h} and Area of Parallelogram is = ${b*h}`);
})


mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of Ellipse, which half of minor axis is ${a}, half of major axis is ${b} and Area of Ellipse is = ${3.14*(a*b)}`);
})


mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of Circle, which radius is ${r} and Area of Circle is = ${3.14*(r**2)}`);
})


mathOperation(a,l,b,h,r, function(a,l,b,h,r){
    console.log(`The area of Trapezium, which side is ${a}, breadth is ${b} and height is ${h} and Area of Trapezium is = ${(0.5(a+b)*h)}`);
})



// // mathOperation(a,l,b,h,r, function(a,l,b,h,r){
//     //     console.log(`The area of Sector, which radius is ${r} and Area of Sector is = ${}`);
//     // })



// let a = (a,b,c=100)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// a(10,20,30);