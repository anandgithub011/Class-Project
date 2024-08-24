

// *Event-Delegation: Event delegation is based on the concept of event bubbling. When an event occurs on an element, it bubbles up to its parent elements. Rather than attaching event listeners to each child element, you attach a single listener to a parent element. This listener then manages all events that bubble up from its child elements.

let parent = document.getElementById("parent");

function Click(){
    console.log("Hello CLicked");
}

parent.addEventListener("click",Click);