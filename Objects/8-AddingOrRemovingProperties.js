
function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const another = new Circle(10);
circle.another = { x:1};
circle['location']={x:1}; //to access dybanically or when we have names like "name something" we cant use cirle.name something but can use brackert

delete circle.location; //to delete a property