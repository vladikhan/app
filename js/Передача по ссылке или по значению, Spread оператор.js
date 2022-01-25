const obj = {
    a: 5,
    b: 1
};

//  const copy = obj; // просто создаёт ссылку
//  copy.a  =10;
//  console.log(copy);// копирует

 function copy(mainObj){
     let objCopy ={};
     let key;
     for (key in mainObj){
        objCopy[key] = mainObj[key]; 
     }
     return objCopy;

 }
 const numbers ={
    a: 2,
    b: 5,
    c: {
        x :7,
        y:4
    } 
 };
 const newNumbers = copy(numbers);
 newNumbers.a = 10;
 console.log(newNumbers);
 console.log(numbers);






 
 const add = {
     d: 17,
     e: 20 
 };
const clone = Object.assign({},add);
clone.d = 05;
console.log(add);
console.log(clone);




const oldArray = [0,1,2,3];
const newArray = oldArray.slice(); //другой способ создания копии
newArray [3] = ' Success';
console.log(oldArray);
console.log(newArray);


//spread operator [...fileName] оператор копирвания
const Germany  = [ 'Audi', 'BMW', 'Mercedes' ];
    Japan = ['Lexus', 'Toyota', 'Suzuki'];
    garage = [...Germany, ...Japan, 'Lambo', 'Porsche'];
console.log(garage);


function loga(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [ 3, 5, 7];

loga(...num);




const array = ["a", "b"];
const newestArray = [...array];
console.log(newestArray);


const q ={
    one: 1,
    two: 2,
};
const para = {...q};
console.log(para);