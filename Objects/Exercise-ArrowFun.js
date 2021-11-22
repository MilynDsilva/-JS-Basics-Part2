function createSquare(len,bre,hei){
    return {
        len,
        bre,
        hei,
        drawSquare: function(mes){
            console.log("Square"+mes);
        }
    }
}

const newSquare =  createSquare(10,20,30);
newSquare.drawSquare(' hi')
//console.log(newSquare.drawSquare(' hi'));




let createSquare1 = (len,bre,hei)=>{
    return {
        len,
        bre,
        hei,
        drawSquare1: (mes)=> console.log("Square"+mes)
    }
}

const newSquare1 =  createSquare1(10,20,30);
newSquare1.drawSquare1(' hi-1')



function thisDiff(a) {
    console.log(this,'in a regular function '+a);
}
thisDiff(1); //refs to the global object

let thisDiff1= (val)=> console.log(this,"inside a arrow function "+val);

thisDiff1(10); //refs to the owner of the function obj






// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function.

// Let us take a look at two examples to understand the difference.

// Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

// The first example uses a regular function, and the second example uses an arrow function.

// The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.