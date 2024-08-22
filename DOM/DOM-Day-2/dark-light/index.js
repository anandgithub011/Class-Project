let btn = document.getElementById("btn");
let btnContainer = document.getElementById("btnContainer");
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
btn.innerText = "Dark";
btn.className = "btn2";
btnContainer.className = "btn-container2";

function darkLight() {
  if (btn.innerText === "Dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.innerText = "Light";
    btn.className = "btn1";
    btnContainer.className = "btn-container1";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    btn.innerText = "Dark";
    btn.className = "btn2";
    btnContainer.className = "btn-container2";
    // btn.style.transition = "1s ease-in";
  }
}
