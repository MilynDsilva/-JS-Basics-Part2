//factory function
function createCircle(radius) {
    return {
        radius,  //radius:radius,
        draw: function(){
            console.log('drawing');
        }
    };
}

const circle = createCircle(1);
//constructor functions

function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const another = new Circle(1);

