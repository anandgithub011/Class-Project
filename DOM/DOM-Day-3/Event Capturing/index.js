
// *Event-Capturing : in nested btn events will execute from outer to inner and so on....
// * we should use true in 3rd argument of addEventListener to make Event-capturing

let p = document.getElementById("p");
let c = document.getElementById("c");
let gc = document.getElementById("gc");

function parent(){
    console.log("Parent");
}
p.addEventListener("click",parent,true);
function child(){
    console.log("Child");
}
c.addEventListener("click",child,true);
function grandChild(){
    console.log("GrandChild");
}
gc.addEventListener("click",grandChild,true);