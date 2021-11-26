const _radius = new WeakMap(); //keys are objs keys are weaks
const _move = new WeakMap();
//const privateProps = new WeakMap();
class Circle {

constructor (radius) {
        _radius.description(this,radius);
    
        _move. set (this, () => {
        console. log( 'move', this);
    });
}
draw () {
        _move. get (this) () ;
        console. log( 'draw' );
    }
}

//line 6
// privateProps. set(this, {
//     radius: radius,
//     move: () => {
    
//     }
// });
// privateProps. get(this) . radius
