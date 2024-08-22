let nums = [555,901,482,1771];

let c = 0;
nums.forEach(ele=>{
    if(ele.toString().length % 2 === 0){
        c++;
    }
})
console.log(c);

// *============================================================================================


// let accounts = [[2,8,7],[7,1,3],[1,9,5]];

// let arr = [];
// let max = 0;
// for(let i = 0; i < accounts.length; i++){
//     let bag = 0;
//     for(let j = 0; j < accounts[i].length; j++){
//         bag += accounts[i][j];
//     }
//     arr[i] = bag;
// }
// arr.forEach(ele=> {
//     if(max < ele){
//         max = ele;
//     }
// })
// console.log(max)
// ~================================================================
// let max = 0;
// accounts.forEach(ele=>{

//     let sum = ele.reduce((total,b)=>total+b,0);
//     if(max < sum){
//         max = sum;
//     }
// })
// console.log(max);