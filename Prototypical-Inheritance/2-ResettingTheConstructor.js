function Shape() {
        
}
Shape.prototype.duplicate = function() {
   console.log( 'duplicate!');
}

function Circle(radius) {
    this.radius = radius;
}
//Circle.prototype.constructor = Circle // This was set before we had set the below statement

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;//must reset the constructor property always whenevrr we rset the prototype

Circle.prototype.draw = function( ) {
    console.log( 'draw' );
}


const s = new Shape();
const c = new Circle(1);

c.duplicate();