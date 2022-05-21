// const murad = $.noConflict();

// murad(function(){
//     murad("button").click(function(){
//       murad("h1").hide(1000);
//     });
//   });


class Car {
    constructor(name,brand,year){
            this.name=name;
            this.brand=brand;
            this.year=year;
    }
}



Car.prototype.color = "Blue";
console.log();

const myCar = new Car('BMW',"X5",2000);
console.log(myCar.color);
