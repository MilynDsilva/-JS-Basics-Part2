function Circle(radius) {
    //let color = 'red';
    //this.color = 'reds'; //local variable inside the function
    //when we get out of the function the variable gos out of the scope
    this.radius = radius;

    let defaultLocaion = {x:0,y:0};
    

    let compluteOptimumLocation = function (factor) {
        //
    }
    this.draw = function (){
        compluteOptimumLocation(0.1);
        console.log('draw');
    };
}

const circle = new Circle(10); //this refs the new circle object
console.log(circle.color)
circle.draw();
//prevernts issues later
//closures are there  but scope is temperory , everytime a function is called
//the varible scope is created









// function Circle(radius) {
//     //let color = 'red';
//     //this.color = 'reds'; //local variable inside the function
//     //when we get out of the function the variable gos out of the scope
//     this.radius = radius;

//     this.defaultLocaion = {x:0,y:0};
    

//     this.compluteOptimumLocation = function () {
//         //
//     }
//     this.draw = function (){
//         this.compluteOptimumLocation();
//         console.log('draw');
//     }
// }

// const circle = new Circle(10); //this refs the new circle object
// console.log(circle.color)