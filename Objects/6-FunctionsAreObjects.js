function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}
Circle.call({},1) //same as line 8
const another = new Circle(1);

