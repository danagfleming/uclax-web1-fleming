/*===================================
||
|| Data Types: Numbers and Strings
||
===================================*/

/*---------------------------
| Data Types: Numbers
---------------------------*/
console.group("DataTypes: Numbers");

const myNum1 = 23;
const myNum2 = 7;
console.log(myNum1 + myNum2);

console.groupEnd();
/*---------------------------
| Data Types: Strings
---------------------------*/

console.group("DataTypes: Strings");

const myStr1 = "I went to the market";
const myStr2 = " and bought a peach";
console.log(myStr1 + myStr2);

console.groupEnd();
/*---------------------------
| Data Types: Template Strings
---------------------------*/

console.group("DataTypes: Template Strings");

const myTempStr = `
        I can write

        Multi line stuff

        Here

        ${myNum1}
        `;

console.log(myTempStr);

console.groupEnd();
