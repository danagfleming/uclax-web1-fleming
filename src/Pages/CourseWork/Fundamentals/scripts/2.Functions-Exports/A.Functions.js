/*===================================
||
|| Functions and Imports
||
===================================*/
import { addTwoNumbers, myState } from "./B.Imports-Exports";
import myFavNumber from "./B.Imports-Exports";

console.group("Functions");

//function trigger/execution
addTwoNumbers(10, 100);
addTwoNumbers(10, 200);
addTwoNumbers(10, 300);
addTwoNumbers(10, 400);

console.log(myState);

console.log(myFavNumber);

console.groupEnd();
