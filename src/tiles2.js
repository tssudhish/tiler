// get the canvas element and its context
const canvas = document.getElementById('tilesCanvas2');


// create a drawing context
const ctx = canvas.getContext('2d');

// create  grid points of 5X10 (50 points) on the canvas and draw them as small circles of size 2
const points = [];
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        points.push({
            x: i * 50,
            y: j * 50
        });
    }
}
ctx.fillStyle = 'black';
for (let i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 2, 0, 2 * Math.PI);
    ctx.fill();
}
