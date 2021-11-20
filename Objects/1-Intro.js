//obj is a collection of key value pairs
const circle = {
    radius:1,
    location: {
        x:1,
        y:1
    },
    draw: function() {
        console.log('Drawing');
    }
};


circle.draw();
console.log(circle.radius)

//obj literals