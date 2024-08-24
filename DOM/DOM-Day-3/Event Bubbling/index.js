let p = document.getElementById("p");
let c = document.getElementById("c");
let gc = document.getElementById("gc");

function parent(){
    console.log("Parent");
}
p.addEventListener("click",parent);
function child(){
    console.log("Child");
}
c.addEventListener("click",child);
function grandChild(){
    console.log("GrandChild");
}
gc.addEventListener("click",grandChild);