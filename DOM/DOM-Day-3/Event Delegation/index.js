

// *Event-Delegation: Event delegation is based on the concept of event bubbling. When an event occurs on an element, it bubbles up to its parent elements. Rather than attaching event listeners to each child element, you attach a single listener to a parent element. This listener then manages all events that bubble up from its child elements.

// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");

// function Click1(){
//     console.log("CLickd 1")
// }
// btn1.addEventListener("click",Click1)
// function Click2(){
//     console.log("CLickd 2")
// }
// btn2.addEventListener("click",Click2)
// function Click3(){
//     console.log("CLickd 3")
// }
// btn3.addEventListener("click",Click3)

// ! Instead of above direct pass eventListener to parent for better effeciency.

let parent = document.getElementById("parent");

function Click(){
    console.log("Hello CLicked");
}

parent.addEventListener("click",Click);