 // let colors = ['red','green','ble','pink','yellow','orange'];
    
    // let count = 0;
    // for(let i = 0; i <= colors.length-1; i++){
        
    //     if(colors[i] === 'blue'){
        //         count++;
        //     }
        //     if(count === 1){
            //         console.log(i);
            //         break;
            //     }else{
    //         console.log(colors[colors.length] = 'blue')
    //     }     
    // }
    
    
    



    
    
    

    // let colors = ['red','green','blue','pink','blue','orange'];

    // let flag = false;
    // let presentColor = "notAvailable";

    // for(let i = 0; i < colors.length; i++){
    //     if(colors[i] === 'orange'){
    //         flag = true;
    //         break;
    //     }
    // }
    // if(flag){
    //     presentColor = "Color Available";
    // }
    // console.log(presentColor);




// problem1
let colors = ['red','green','yellow','pink','violet','orange'];

let presentColor = "Color is not available";

for(let i = 0; i < colors.length; i++){

    if(colors[i] === 'orange'){
        presentColor = "Color is Available";
        break;
    }
}

console.log(presentColor);







    



// problem 2
// let colors = ['red','green','yellow','pink','violet','orange'];
// // let colors = ['red','green','yellow','blue','pink','violet','orange','purple'];

// let bag;

// for(let i = 0; i < colors.length; i++){
    
//     if(colors[i] === 'blue'){
//         bag = i;
//     }
// }
// if(bag !== undefined){
//     console.log(bag);
// }
// else{
//     colors[colors.length] = 'blue';
//     console.log(colors);
// }







    // ======  some bug is there if we target 1st index of element?==================// and after correction in line no. 187 instead of (bag) we written like (bag!==undefined) then it will work properly.

    // let colors = ['red','green','yellow','pink','violet','orange','blue'];
    // let colors = ['re','green','yellow','pink','violet','orange','purple'];

    // let bag="";
    // let bag;
    
    // for(let i = 0; i < colors.length; i++){
        
    //     if(colors[i] === 'red'){
    //         // bag += i;
    //         bag = i;
    //         break;
    //     }
    // }

    // // if(bag){
    // if(bag !== undefined){
    //     console.log(bag);
    // }
    // else{
    //     colors[colors.length] = 'red';
    //     console.log(colors);
    // }
