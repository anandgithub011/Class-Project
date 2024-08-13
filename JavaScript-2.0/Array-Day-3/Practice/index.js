// alert("fckjh")

// ~check palindrome or not?
// function isPalindrome(str){
//     let bag = "";
//     for(let i = str.length-1; i>= 0; i--){
//         bag+=str[i];
//     }

//     if(str === bag){
//         console.log("Yes it is Paliondrome");
//     }
//     else{
//         console.log("No it is not palindrome");
//     }
// }

// isPalindrome("react")   using function;

// ~check palindrome or not, using function?

// let res = (str)=>{

//     let bag = Array.from(str).reverse().join("");
//     if(bag === str){
//         // console.log("Yes");
//         return `yes ${bag}, is palindrome`;
//     }
//     else{
//         // console.log("Not");
//         return "No!! it is not palindrome"
//     }
// }

// console.log(res("racecar"));
// console.log(res("maam"));
// console.log(res("maa"));

//~ WAP to check  if all the element of array is greater than 6 then return true, if any one element less than 6 then return alse?

// function isGreater(num){
//     var flag = false;
//     let c = 0;
//     for(let ele of num){

//         if(ele>6){
//             flag = true;
//             c++;
//         }
//     }
//     (c == num.length)?console.log("true"):console.log("false");
// }

// let arr = [13, 16, 19, 15, 19, 28, 16];
// // let arr = [3, 6, 9, 5, 9, 8, 6];
// isGreater(arr);

// ~every method
// ~ WAP to using inbuilt function,check if all the element of array is greater than 6 then return true, if any one element less than 6 then return alse?

// let numArr = [13, 16, 19, 15, 19, 28, 16];
// // let numArr = [3, 6, 9, 5, 9, 8, 6];

// let res = numArr.every((ele) => {
//     console.log("hello")
//   return ele > 6;
// });

// console.log(res);

//~ WAP to,check if any one of the element of array is greater than 6 then return true, if any one element less than 6 then return alse?

// function isgreater(num) {
//   let flag = false;
//   for (let ele of num) {
//     if (ele > 6) {
//       flag = true;
//       break;
//     }
//   }
//   if (flag) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// // let numArr = [3, 6, 9, 5, 9, 8, 6];   //* true
// let numArr = [3, 2, 3, 5, 4, 3, 1]; //* false
// isgreater(numArr);

//~ WAP to using inbuilt function,check if any one of the element of array is greater than 6 then return true, if any one element less than 6 then return alse?

// let numArr = [3, 2, 3, 5, 4, 3, 1];
// // let numArr = [3, 6, 9, 5, 9, 8, 6];

// let res = numArr.some((ele) => {
//     console.log("hello")
//     return ele>6;
// });
// console.log(res);




// if there is  no element inside the array and we want to use map method than return only empty array{}
// let numArr = [3, 2, 3, 5, 4, 3, 1];

let numArr = [];

let res = numArr.filter(ele=>{
    return ele > 9;
})
console.log(res);  //* []





