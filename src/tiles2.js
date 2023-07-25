// get the canvas element and its context
const canvas = document.getElementById('tilesCanvas2');



// draw a point on the canvas when the user clicks on it
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    points.push({
        x,
        y
    });
    draw();
}
);


