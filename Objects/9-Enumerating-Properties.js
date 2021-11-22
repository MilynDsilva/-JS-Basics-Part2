function Circle(radius) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key,circle[key]);
    //to access value we can use bracket notattion
    //to get only vals and not meth we can use ^
}


const keys = Object.keys(circle);// returss all the keys as an array
console.log(keys);

if ('radius' in  circle)
    console.log("circle has a radius");