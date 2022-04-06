// Arrow Function

// const myFunc = function(){
//     return("hello")
// }
// simple func
// function(){}
// arrow func 
// ()=>{}

// const myFunc=()=>{
//     return "hello arrow func";
// }

// console.log(myFunc());

// function Car (){
//     time(){
//         console.log(new Date());
//     }
// }

// Car();
// const a ={
//     name: "Murad"
// }
// console.log(a.name);


// let Human = class {
//     constructor(name){
//             this.name = name;
            
//     }
//     sayName(){
//         return "My name is "+this.name;
//     }

//     run(){
//         return "running..."
//     }
//     calculateAge(currentTime){
//         return new Date().getFullYear() -  currentTime; 
//     }
// }

class Human{
    constructor(name){
            this.name = name;
            
    }
    sayName(){
        return "My name is "+this.name;
    }

    run(){
        return "running..."
    }
    calculateAge(currentTime){
        return new Date().getFullYear() -  currentTime; 
    }

    myInfo(name, age, city){
        return `My name is ${name}, Im ${age}. I live ${city}`
    }
}

class Car extends Human {
    carInfo(brand){
        return brand;
    }
   
}


const myCar = new Car();
const myHuman = new Human("Murad");

console.log(myCar.carInfo("BMW"));
console.log(myHuman.sayName());
console.log(myCar.run());
console.log(myHuman.calculateAge(1999));
console.log(myCar.calculateAge(2007));
console.log(myHuman.myInfo("Qadir",23,"Baku"));
console.log(myHuman.myInfo("Kamran",21,"Sumqayit"));
console.log(myHuman.myInfo("Murad",18,"Sumqayit"));



