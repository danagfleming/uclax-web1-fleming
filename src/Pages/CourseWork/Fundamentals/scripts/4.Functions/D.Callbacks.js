/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/
/*---------------------------
Functions: Call Backs
---------------------------*/
console.group("Functions: Call Backs");

const myConsumerFn = (fn) => {
    fn("My Consumer Function");
};

const myFnToPas = () => {
    console.log("Passing this function in");
};

myConsumerFn(myFnToPas);

//Pass anonymous functions
myConsumerFn(() => {
    console.log("My callback anonymous");
});

console.groupEnd();
