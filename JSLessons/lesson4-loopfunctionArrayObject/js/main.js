// LOOPS
// while

// deyer
// shert
// netice
// davamli sistem

// let a = 1;

// while (a<10) {
//     console.log(a);
//     a++;
//     if (a == 5) {
//         // break
//         // continue;
//     }

// }

// var i = 0;
// var n = 0;

// while (i < 5) {
//   i++;

//   if (i === 3) {
//     continue;
//   }

//   n += i;
//   console.log(n);
// }

// let a = 10;
// while (a>=1) {
//     console.log(a);
//     // document.write(a+"JavaScript<br>");
//     a--;
//     if(a ===5){
//         continue;
//     }

// }

// =====================================================================================
// DO WHILE
// let a = 1;
// do{
//     console.log(a);//netice
//     a++;//hadise
// }while(a>100);//shert
// =====================================================================================
// FOR
// for (let a = 1; a < 10; a++) {
//   console.log(a);
//   while (a < 5) {
//     console.log("Hello");
//     a++;
   
//   }
// }
// =====================================================================================


// let a = ["table",'pen',5,6,7,8,9,true];
// for( x in a){
//     console.log(a[x]);
// }


// =====================================================================================

// arraylar index deyeri0dan bashlayir
// let info = ['table','pen','hello'];

// info[1] = "ten";

// let info = [];
// info[1] = "table";
// info[2] = 'meyble';
// info[3] = 'disable';


// console.log(info[1]);
// console.log(info[2]);
// console.log(info[3]);



// let info = [];
// info['myindex'] = 'new';
// console.log(info["myindex"]);


// let add = "project";
// let home = 'page'; 
// let info = ['table','pen','book',[1,2,3,4,[true,home,add],5],'baku'];
// console.log(info[3][4][1]);


// function myFunc (){
//     console.log("Hello"); 
// }
// myFunc();


// const myFunc =function (){
//     return "Hello";
// }
// console.log(myFunc())


// oz-ozunu cagiran funksiya
// (function myFunc (){
//     console.log("Hello");
// })()


// function myFunc(a="Hello ",b="JavaScript"){
//     return a+b;
// }
// console.log(myFunc());


const car = {
    brand:"BMW",
    model:"X1",
    year:function(currentTime) {
        return new Date().getFullYear() - currentTime;
    },
    salon:[
        function(mySalon) {
            if (mySalon == true) {
                return 'full salon';
            }else{
                    return 'simple salon'
            }
        }
    ]


}
console.log(car.brand);
console.log(car.model);
console.log(car.year(1990));
console.log(car.salon[0](true));


