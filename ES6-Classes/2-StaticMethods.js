class Circle {
    constructor(radius){
        this.radius = radius;
    }

    //instance meth //available at instance of a class
    draw(){
    }

    //static ethod
    //to create utility fun that are not tied to particular object
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    } //no longer available outside //on a circle object
}

const circle = Circle.parse('{"radius":1}')

console.log(circle);
