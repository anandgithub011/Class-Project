

function SubmitBtn(){
    let btn = document.getElementById("btn");
    let message = document.getElementById("message");

    message.style.cssText="visibility:visible;"
    setTimeout(()=>{
        message.style.cssText="visibility:hidden;"
    },3000)
}
btn.addEventListener("click", SubmitBtn);

// let collection = document.getElementsByClassName("head1");
// console.log(collection[0].innerHTML); //*  Head1

// let nodeList = document.querySelectorAll(".head1");
// console.log(nodeList[2].innerHTML);   //* Head3
