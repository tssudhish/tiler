const canvas = document.getElementById('tilesCanvas');
const ctx = canvas.getContext('2d');

// create  some random black points in the canvas
const points = [];
for (let i = 0; i < 10; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    });
}
// draw the points as small circles of size 2
ctx.fillStyle = 'black';
for (let i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 2, 0, 2 * Math.PI);
    ctx.fill();
}

// write function isLeft
function isLeft(p0, p1, p2) {
    return ((p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y));
}

// write the function that calculates the convex hull
function convexHull(points) {
    // sort the points by x and y coordinates
    points.sort((a, b) => {
        if (a.x === b.x) {
            return a.y - b.y;
        }
        return a.x - b.x;
    });

    // create the upper hull
    const upperHull = [];
    for (let i = 0; i < points.length; i++) {
        while (upperHull.length >= 2 && isLeft(upperHull[upperHull.length - 2], upperHull[upperHull.length - 1], points[i]) <= 0) {
            upperHull.pop();
        }
        upperHull.push(points[i]);
    }

    // create the lower hull
    const lowerHull = [];
    for (let i = points.length - 1; i >= 0; i--) {
        while (lowerHull.length >= 2 && isLeft(lowerHull[lowerHull.length - 2], lowerHull[lowerHull.length - 1], points[i]) <= 0) {
            lowerHull.pop();
        }
        lowerHull.push(points[i]);
    }

    // remove the first and last point of the lower hull (they are the same as the last and first point of the upper hull)
    lowerHull.shift();
    lowerHull.pop();

    // combine the upper and lower hulls
    return upperHull.concat(lowerHull);
}


// create a convex hull from the points and draw it
const hull = convexHull(points);

// log the convexhull to the console
console.log(hull);

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(hull[0].x, hull[0].y);
for (let i = 1; i < hull.length; i++) {
    ctx.lineTo(hull[i].x, hull[i].y);
}
ctx.closePath();
ctx.stroke();

// create rectangles from the convex hull
const rectangles = [];
for (let i = 0; i < hull.length - 1; i++) {
    for (let j = i + 1; j < hull.length; j++) {
        rectangles.push({
            x: hull[i].x,
            y: hull[i].y,
            width: hull[j].x - hull[i].x,
            height: hull[j].y - hull[i].y
        });
    }
}


// fill the convex hull with tiles with random semi-transparent colors such that they don't overlap
for (let i = 0; i < rectangles.length; i++) {
    ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    ctx.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height);
}


