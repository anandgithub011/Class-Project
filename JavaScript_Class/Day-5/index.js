console.log("Hi JavaScript");



console.log(1); //1
console.log(1 + 1); //2
console.log(1 + "1"); //11
console.log(1 - "1"); //0
console.log("1" - "1"); //0
console.log(2 * "HI");  //NaN
console.log(2 + true);  //3
console.log(2 + "true");   //2true
console.log(2 - "true");  //NaN
console.log(5 / "5");  //1
console.log(10 + true - false);   //11
console.log(true * true);  //1
console.log(10 % 2);   //0
console.log(2 - false + true);   //3
console.log(true + "1");   //true1

console.log("5" * "5");   //25
console.log("Hi" * "Hi");  //NaN
console.log(10 / "10"); //1

console.log(typeof 3 + 3);   //number3
console.log(typeof true + true); //booleantrue
console.log(typeof a); // undefined

console.log(typeof null);  // object
console.log(typeof Number);  // function
console.log(typeof Number());  //number
console.log(typeof String);  //function
console.log(true + "1"); //true1
console.log(true + "true"); //truetrue
console.log(typeof window);  //object
console.log(typeof BigInt);  //function
console.log(typeof "jspider");  //string
console.log(typeof Boolean);  //function

// console.log(typeof BigInt());  //Uncaught TypeError: Cannot convert undefined to a BigInt at BigInt (<anonymous>)

console.log(typeof Symbol());  //symbol

// // ---------IMP----------------//
console.log([] + "Hi");  //Hi

console.log(true + +true); //2
console.log(3 + + "4");  //7
console.log(typeof undefined); //undefined
console.log(typeof function(){}); //function
console.log(2 + 2 + "hi");  //4hi
console.log(3 - - "1");   //4
console.log(3 - "-1");   //4
console.log(typeof Error);  //function
console.log(typeof -1); //number
console.log(null + 2 - "true");   //NaN
console.log(null + 2);   //2
console.log(typeof NaN);  //number
// console.log(1++);  //Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
console.log(1 * "-1");  //-1
console.log("Hi" + 2 + 3);  //Hi23
console.log(1 - Symbol);  //NaN
console.log(typeof ("Hi" - 1));   //number

// // ====EXPLICIT TYPE CASTING=====//
// let num1 = Number(prompt("Enter your first number"));
// console.log(num1);
// console.log(typeof num1);
// let num2 = Number(prompt("Enter your second number"));
// console.log(num2);
// console.log(typeof num1);
// console.log(num1 + num2);


// let number1 = parseInt(prompt("Enter your 1st number"));
// console.log(number1);
// console.log(typeof number1);
// let number2 = parseInt(prompt("Enter your 2nd number"));
// console.log(number2);
// console.log(typeof number2);
// console.log(number1 + number2);

// // ============Implicit Conversion==========//

// // In certain situation JavaScript automatically converts data of one type to another (to the right type). This is known as implicit Conversion.


// // ============Explicit Conversion==========//

// // In explicit type conversion, you can manually convert one type of data into another using built-in functions.





// console.log(-3 + "2" -4);  //



