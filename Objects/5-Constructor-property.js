
//const circle = createCircle(1);
//constructor functions

function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const another = new Circle(1);


//every obj has a constructory property and that refs the fun thatw was used to create that object