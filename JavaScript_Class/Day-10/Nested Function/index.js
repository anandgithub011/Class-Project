console.log("hi JavaScript");



console.log("Start");
var a = 10;
let b = 20;
const c = 30;
function grandParent(){
    console.log("Hi, I am grandParent function");
    console.log(a);
    console.log(b);
    console.log(c);
    var d = 40;
    let e = 50;
    const f = 60;

    function parent(){
        console.log("Hi,I am parent function");
        console.log(d);
        console.log(e);
        console.log(f);
        // console.log(h); //Uncaught Reference Error: Cannot access 'h' before initialization. 

        var g = 70;
        let h = 80;
        const i = 90;

        function child(){
            console.log("Hi,I am a child function");
            console.log(g);
            console.log(h);
            console.log(i);
            console.log(d);
        }return child;
    }return parent;
}
grandParent()()();