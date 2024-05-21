/*===================================
||
|| Variables
||
===================================*/
console.group("Variables");

/*
    A variable is a reference to a value so it can be used over and over,
    or referenced later on
*/

//Let can be changed
let favColor = "Green";
console.log(favColor);
favColor = "Blue";
console.log(favColor);

//Const cannot be changed
const firstName = "Dana";
console.log(firstName);
//firstName = "David";
//console.log(firstName);

console.groupEnd();
