/*===================================
||
|| Data Types: Objects
||
===================================*/
/*---------------------------
| Data Types: Objects
---------------------------*/
console.group("DataTypes: Objects");

let myObj = {
    str: "Red",
    num: 1862,
    arr: [13, 17, 23],
    fn: () => {
        console.log("This is a function assigned to an object.");
    },
};

myObj.fn();

// Everything is an object
let myArr = ["up", "down", 23];

console.log(myArr);

if (myArr.length > 2) {
    console.log("Array has more than 2 elements");
}

myArr.sayWhat = "Say Who?";

console.log(myArr);

console.groupEnd();
