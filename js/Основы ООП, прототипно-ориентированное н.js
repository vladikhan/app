
    'use strict';
    const soldier = {
        health: 400,
        armor: 100,
        sayHello: function(){
            console.log('Hello');
        }
    };
    const  john = {
        health:200
    };

    // john.__proto__ = soldier;
    Object.setPrototypeOf(john, soldier),
    // console.log(john);
    john.sayHello();
 

let animal = {
    eats: true,
    walk(){

    }
    alert('Rabbit! Guv-guv!');
};

rabbit.walk();




// let animal = {………
//     eats: true,
//     walk() {
//       /* этот метод не будет использоваться в rabbit */
//     }
// };
  
// let rabbit = {
//     __proto__: animal
// };
  
// rabbit.walk = function() {
//     alert("Rabbit! Bounce-bounce!");
// };
// rabbit.walk(); // Rabbit! Bounce-bounce!