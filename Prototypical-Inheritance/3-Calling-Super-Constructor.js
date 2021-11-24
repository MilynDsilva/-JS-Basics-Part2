function Shape(color) {
    //this.color = color; points  to global object by default --1
    this.color = color;
    }
Shape.prototype.duplicate = function() {
   console.log( 'duplicate!');
}

function Circle(radius,color) {
    //Shape(color);    //--1
    Shape.call(this,color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function( ) {
    console.log( 'draw' );
}


const s = new Shape();
const c = new Circle(1,'red');

console.log(c);
