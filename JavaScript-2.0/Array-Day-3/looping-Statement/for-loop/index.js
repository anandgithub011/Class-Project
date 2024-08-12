// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// !===============wrong method=================================

// for(let i = 0; i < n; i++){

//     if(numArr[i] > 9){
//         console.log(i);
//         break;
//     }
//     else{
//         console.log("not");
//     }
// }

// !============================================================

// ~=============================Correct method===================
// *first method without function

// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// let flag = false;
// var res;

// for(let i = 0; i < n; i++){
//     if(numArr[i] > 9){
//         flag = true;
//         res = numArr[i];
//         break;
//     }
// }
// (flag)? console.log(res):console.log("Not");

// // if(flag){
// //     console.log(typeof res);
// // }
// // else{
// //     console.log("not");
// // }

// ~=============================Correct method===================
// *2nd method with function

// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// function isNumAvailable(arr) {
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 9) {
//       return arr[i];
//     }
//   }
// }

// let res = isNumAvailable(numArr);
// console.log(res);

// ~using inbuilt function============================================================

// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// // let res = numArr.filter((ele) => {
// //   return ele > 9;
// // });

// let res = numArr.filter((ele) => ele > 9);

// console.log(res);

// ~======================================================================================

// ~==using Arrow function==============================================================

// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// var bag = "";
// let res = (numArr) => {
//   for (let num of numArr) {
//     if (num > 9) {
//       return num;
//     //   bag += num + " ";
//     }
//   }
// };

// console.log(res(numArr));
// // res(numArr);
// // console.log(bag);

// ~===============================================================================
// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// let res = numArr.map((ele) => ele + 3);

// console.log(res);  //* [6, 7, 9, 11, 22, 32, 5, 8]


// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// let res = numArr.map((ele) => ele > 3);

// console.log(res);  //* [false, true, true, true, true, true, false, true]


// ~=======================================================================================================
//* Airthmetic Operator
//* using filter function with (+) operator just check which element condition is true and print that element.


// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// let res = numArr.filter((ele) => ele + 3);

// console.log(res);  //* [ 3, 4, 6, 8, 19, 29, 2, 5 ] 

//* comparison Operatoe
//* using filter function with (<) operator just check which element condition is true and print that element.


// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// let res = numArr.filter((ele) => ele < 3);

// console.log(res);  //* [ 2 ]   













// let numArr = [3, 4, 6, 8, 19, 29, 2, 5];
// let n = numArr.length;

// let res = numArr.map((ele,i, arr) => {
//     return ele+i;
// });

// console.log(res);  //* [ 2 ]   








// var i = "kamala"

// for(let i = 0; i <= 5; i++){   // let keyword is scoped to that for block.
//     console.log(i);
// }

// console.log(i);  //kamala



// let num = [4,2,3,1,7,3,9,4];

// let res = num.some((ele)=>{
//     console.log("hello");
//     return ele > 6;
// })

// console.log(res);


// let arr = [3,6,5,9,7,19,2];
// // let arr = [63,46,35,29,17,19,12];

// let count = 0;
// let flag = false;
// for(let  ele of arr){
//     if(ele > 6){
//         flag = true;
//         count++;
//     }
// }
// if(count === arr.length){
//     console.log(flag)
// }
// else{
//     console.log("false");
// }



// // let arr = [3,6,5,9,7,19,2];
// let arr = [63,46,35,29,17,19,12];

// let res = arr.every(ele=>{
//     return ele > 6;
// })

// console.log(res); //true


// let str = "javascript";

// str = Array.from(str);
// // console.log(str);

// let reverse = str.reverse();

// console.log(reverse);

