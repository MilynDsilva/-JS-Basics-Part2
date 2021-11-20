// const circle = {
//     radius:1,
//     location: {
//         x:1,
//         y:1
//     // },
//     // draw: function() {
//     //     console.log('Drawing');
//     }
// };

function createCircle(radius) {
    return {
        radius,  //radius:radius,
        draw: function(){
            console.log('drawing');
        }
    };
}

const circle = createCircle(1);
circle.draw();
//cannot access circle property here because its not initialized
const circle1 = createCircle(2);
circle1.draw();
console.log(circle.radius,circle1.radius)

