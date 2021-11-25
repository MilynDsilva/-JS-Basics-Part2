const Circle = function() {
    this. draw = function() { console. log(this) ; }
};
    const c = new Circle();
    // Method Call
    c.draw(); //this points to the c object c. which is the circle object
    
    const draw = c.draw;
    // Function Call
    draw(); //function call // not part ofan obj
    //as function if its called points to window/global obj










'use strict'// prevents from accidentlys modifying the global obj
class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();

