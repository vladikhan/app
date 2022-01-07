const options={
    name: 'test',
    height: 1024,
    weight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

// console.log(options.name);

// let counter = 0;
// for (let key in options){
//     if (typeof (options[key])==='object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);   
//             counter++;
//         }    
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);  
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(bg);