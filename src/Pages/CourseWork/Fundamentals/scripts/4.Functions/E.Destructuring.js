/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
/*---------------------------
Functions: Destructuring
---------------------------*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    //const { first, last, email, colors } = person0bj

    console.log(`"Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colors are:");

    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Dana",
    last: "Fleming",
    email: "dana@gmail.com",
    colors: ["green", "blue"],
};

const person2 = {
    first: "Antoine",
    last: "Martin",
    email: "antoine@gmail.com",
    colors: ["black", "white"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
