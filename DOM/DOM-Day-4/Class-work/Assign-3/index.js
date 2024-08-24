let img1 = "../../../../JavaScript-2.0/MOCK_HTML_CSS-17-08/Images/hero-carousel-1.jpg";
let img2 = "../../../../JavaScript-2.0/MOCK_HTML_CSS-17-08/Images/testimonials-2.jpg";
let img3 = "../../../../JavaScript-2.0/MOCK_HTML_CSS-17-08/Images/testimonials-3.jpg";
let img4 = "../../../../JavaScript-2.0/MOCK_HTML_CSS-17-08/Images/testimonials-4.jpg";
let image = document.getElementById("image");

let arrImg = [img1,img2,img3,img4];

let c = 0;
function Forward(){
    c++;
    if(c >= arrImg.length){
        c = 0;
    }
    image.src = arrImg[c];
}

function Backward(){
    c--;
    if(c < 0){
        c = arrImg.length-1;
    }
    image.src = arrImg[c];
}






