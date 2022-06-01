'use strict';
function createCounter(){
    let counter = 0;
    const myFunction = function(){debugger
        counter+=1;debugger
        return counter;debugger
    };

    return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger
console.log(c1,c2,c3);




let val = 7;
function createAdder(){
    function addNumber(a,b){
        let ret = a+b;
        return ret;
    }
    return addNumber
}
let adder = createAdder()
let sum = adder(val,8);
console.log("example: ", sum)