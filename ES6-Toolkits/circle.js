//implementation detail
const _radius = new WeakMap () ;


//public interface
class Circle {
    constructor (radius) {
        _radius.set(this, radius);
    }
draw() {
        console. log( 'Circle with radius ' + _radius.get(this) );
    }
}
const c = new Circle(10);

//c.draw() ;

module.exports = Circle; //obj that is exported from this module
//radius is not accessible else where