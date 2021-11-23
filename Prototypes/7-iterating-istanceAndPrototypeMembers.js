function Circle(radius){
    //instance members
    this.radius = radius;

    this.move = function (){
        console.log('move');
    }
}
const c1 = new Circle(1);

//prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}

c1.draw();

//returns instance mebers only
console.log(Object.keys(c1));


//returns all membewrs instance(own) and prototypes
for (let key in c1) console.log(key);
//c1.hasownproperty //works in console //will returns t or f values