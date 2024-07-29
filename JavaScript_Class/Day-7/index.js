console.log("Hi JavaScript");

// JavaSCript Comparison Operators --------------------//
// 1. (==)equal to ---------------------//
// 2. (===)equal value and equal type --------------------------//
// 3. (!=) not equal -------------------------------//
// 4. (!==) not equal value or not equal type-----------------------//
// 5. (>) greater than--------------------------//
// 6. (<) less than-----------------------------//
// 7. (>=) greater than or equal to------------------------//
// 8. (<=) less than or equal to----------------------//
// 9. Ternary operators -------------------------------//




// 1. (==)equal to ---------------------//

// let x = 100;
// let y = 100;
// console.log(x == y); //true

// let x = 100;
// let y = 10; 
// console.log(x == y);  //false



// 2. (===)equal value and equal type --------------------------//

// let x = 100;
// let y = 100;
// console.log(x === y); // true


// let x = 100;
// let y = "100";
// console.log(x === y);  //false

// let x = "100";
// let y = "100";
// console.log(x === y);  //true

// let x = "200";
// let y = "100";
// console.log(x === y);  //false



// 3. (!=) not equal -------------------------------//

// let x = 100;
// let y = 100;
// console.log(x != y); //false

// let x = 100;
// let y = "100";
// console.log(x != y); //false

// let x = 100;
// let y = 200;
// console.log(x != y); //true


// 4. (!==) not equal value or not equal type-----------------------//

// let x = 100;
// let y = "100";
// console.log(x !== y); //true


// let x = "200";
// let y = "100";
// console.log(x !== y); //true

// let x = 100;
// let y = 100;
// console.log(x !== y); //false

// let x = 20;
// let y = 200;
// console.log(x !== y); //true



// 5. (>) greater than--------------------------//

// let x = 100;
// let y = 200;
// console.log(x > y); //false

// let x = 200;
// let y = 100;
// console.log(x > y); //true


// let x = "100";
// let y = 100;
// console.log(x > y); //false

// let x = 100;
// let y = 100;
// console.log(x > y); //false



// 6. (<) less than-----------------------------//

// let x = 100;
// let y = 200;
// console.log(x < y); //true

// let x = 200;
// let y = 100;
// console.log(x < y); //false

// let x = "100";
// let y = 100;
// console.log(x < y); //false

// let x = 100;
// let y = 100;
// console.log(x < y); //false



// 7. (>=) greater than or equal to------------------------//

// let x = 100;
// let y = 200;
// console.log(x >= y); //false

// let x = 100;
// let y = 100;
// console.log(x >= y); //true

// let x = "100";
// let y = 100;
// console.log(x >= y); //true

// let x = "100";
// let y = "100";
// console.log(x >= y); //true

// let x = 200;
// let y = 100;
// console.log(x >= y); //true



// 8. (<=) less than or equal to----------------------//

// let x = 100;
// let y = 200;
// console.log(x <= y); //true

// let x = 100;
// let y = 100;
// console.log(x <= y); //true

// let x = 200;
// let y = 100;
// console.log(x <= y); //false

// let x = "100";
// let y = "100";
// console.log(x <= y); //true

// let x = "100";
// let y = 100;
// console.log(x <= y); //true


// 9. Ternary operators -------------------------------//

// let age = 20;

// if(age >= 20){
//     console.log("You can Access...");
// }else{
//     console.log("You Can't Access!!!!!");
// }

// (age >= 20) ? console.log("You can Access..."): console.log("You Can't Access!!!!!");

// console.log(typeof 2-2);