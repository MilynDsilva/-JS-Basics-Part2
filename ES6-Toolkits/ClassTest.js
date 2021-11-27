class NewCar {
    constructor(brand){
        this.carname = brand;
    }
    display(){
        return 'i am a '+this.carname;
    }
}

class Model extends NewCar {
    constructor(brand,mod){
        super(brand);
        this.model = mod;
    }
    show() {
        return this.display() + ', and my company is'+this.model;
    }
}

let ford = new Model('Ford','Limited');

//console.log(ford);
console.log(ford.show());
console.log(ford.display());































// class Vehicle{
//     constructor(carname,color){
//         this.carname = carname;
//         this.color = color;
//     }
//     year(){
//         console.log('year');
//     }
// }
// //let myCar = new Vehicle('Ford','red');

// //console.log(myCar.carname , myCar.color)

// class Car extends Vehicle{
//     constructor(){
//         super (color);
//     }   
// }

// let myCar = new Car('ford','red');