// let student = {
//     name:"jhon",
//     dept:"CSE",
//     age:23
// };

// for(let key in student){
//     // console.log(student.key);  //undefined
//     console.log(key);  //
//     console.log(student[key]);  //

// }

//~ --------------------------

// ~================================================================================
// let students = [
//   {
//     name: "jhon",
//     dept: "CSE",
//     age: 23,
//   },
//   {
//     name: "miller",
//     dept: "ISE",
//     age: 23,
//   },
//   {
//     name: "smith",
//     dept: "Civil",
//     age: 23,
//   },
// ];

// // let newObj = [ ...students ];
// let newObj = JSON.parse(JSON.stringify(students));
// students[2].deptjjn = "ibfd";
// console.log(newObj);
// console.log(students);

// ~================================================================================

// const newArray = [];
// for (let i = 0; i < students.length; i++) {
//   newArray[i] = {
//     name: students[i].name,
//   };
// }
// console.log(newArray);
//~=======================================================================

// let res = students.map((ele)=>{
//     return {name: ele.name};
// })
// console.log(res);
//~=======================================================================

// let res = students.map((ele) => {
//   let obj = {};
//   obj["name"] = ele.name;
//   return obj;
// });
// console.log(res);
//~=======================================================================

// let arr = [];
// for (let i = 0; i < students.length; i++) {
//   let obj = {};
//   if (!obj[i]) {
//     obj.name = students[i].name;
//     arr.push(obj);
//   }
// }
// console.log(arr);
//~=======================================================================

// for (let i = 0; i < students.length; i++) {
//   let obj = {};
//   obj["name"] = students[i].name;
//   arr[i] = obj;
// }
// console.log(arr);
//~=======================================================================

// let l = parseInt(prompt("length"));
// let b = parseInt(prompt("breadth"));
// console.log("Area of rectangle is:", l*b );

//~=======================================================================
//
// console.log(window)
// let a = 10;

// if(0.0993){
//     console.log("T");
// }
// else{
//     console.log("F");
// }

//~=======================================================================
// let demo = [1, 3, 4, 5, 6, 7, 8, 6, 4];

// let result = demo.findIndex((ele) => {
//   // console.log(ele); //
//   // return "tfcy";  //* 0
//   // return "";  //* -1
//   return ele > 5;  //*  4
// });
// console.log(result);
//~=======================================================================

// let res = ()=>{
//     console.log("a")
//     console.log("b")
//     console.log("c")
//     console.log("d")
//     console.log("e")
//     console.log("f")
//     console.log("g")
// }
// res();
//~=======================================================================

// let arr3 =[];
// let res = arr.map(ele=>{
//     return ele>5;
// })
// console.log(res);  //*  [] empty array

//~=======================================================================
// let obj1 = {
//   names: "amogh",
//   depta: "CSE",
// };

// let obj2 = {
//   name: "amogh",
//   dept: "CSE",
// };

// let obj3 = {
//   naadame: "amdfvdogh",
//   dfwept: "CSdfevdE",
// };

// let obj4 = {
//   nasme: "amogh",
//   dsdept: "CSE",
// };

// let totalData = {...obj1};
// let res = JSON.stringify(totalData);
// console.log(res);

//~=======================================================================
// let student =
//   {
//     name: "jhon",
//     dept: "CSE",
//     age: 23,
//     marks:{
//       eng:20,
//       math:40,
//     }
//   }

// let newObj = student;  //*  in this case newobj and existing object both will be affected
// let newObj = {...student}; //* in this case only 1 level removed the refrences and nested object of newObj and existing obj(student) both will be affectd
// let newObj = JSON.parse(JSON.stringify(student)); //* in this case newObj and existing object(student) both will be convert from shallow copy to deep copy of nth level.
// newObj.result = "pass";
// newObj.marks.science = 22;
// console.log(student);
// console.log(newObj);

//~=======================================================================





let arr = [
    "W",
    ["a",1],
    ["b",1],
    ["c",1],
    ["d",1],
];


console.log(arr);
console.log("=========================")

// let res = arr;
// let res = [...arr];
// let res = JSON.parse(JSON.stringify(arr));
let res = arr.map(ele=> ele);
// console.log(res === arr); //* false

// res[0] = "wwd";
res[1][0] = "cgvhbj";

console.log(res);
console.log(arr);


// let arr = [
//     "W",
//     ["a",1],
//     ["b",1],
//     ["c",1],
//     ["d",1],
// ];


// console.log(arr);
// console.log("=========================")

// let res = arr;
// // let res = [...arr];
// // let res = JSON.parse(JSON.stringify(arr));

// res.filter(ele=> ele);
// // console.log(res === arr); //* false

// res[0] = "wwd";
// arr[1][0] = "cgvhbj";
// console.log("res",res);
// console.log("ARR",arr);

// let arr = [
//     "W",
//     ["a",1],
//     ["b",1],
//     ["c",1],
//     ["d",1],
// ];


// console.log(arr);
// console.log("=========================")

// let res = arr;
// // let res = [...arr];
// // let res = JSON.parse(JSON.stringify(arr));

// res.filter(ele=> ele);
// // console.log(res === arr); //* false

// res[0] = "wwd";
// // arr[1][0] = "cgvhbj";
// console.log("res",res);
// console.log("ARR",arr);

