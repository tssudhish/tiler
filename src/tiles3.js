// create a javascript code which creates document which is like that of a spreadsheet but contains data at the cells. Each of the cells store data of the type: length, breadth, width, height, color, opacity, texture, etc. The data is stored in a 2D array. 
// 
// 
// create a 2D array of 5X10 (50 cells) and store data in the cells
const cells = [];
for (let i = 0; i < 5; i++) {
    cells[i] = [];
    for (let j = 0; j < 10; j++) {
        cells[i][j] = {
            length: 50,
            breadth: 50,
            width: 50,
            height: 50,
            color: 'red',
            opacity: 1,
            texture: 'none'
        };
    }
}


// draw the cells on the canvas as rectangles
for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
        ctx.fillStyle = cells[i][j].color;
        ctx.globalAlpha = cells[i][j].opacity;
        ctx.fillRect(i * 50, j * 50, 50, 50);
    }
}


// create a function which returns the cell at a given point
function getCell(x, y) {
    return cells[parseInt(x / 50)][parseInt(y / 50)];
}


// create a function which returns the cell at a given point
function getCell(x, y) {
    return cells[parseInt(x / 50)][parseInt(y / 50)];
}


// create a function which returns the cell at a given point
function getCell(x, y) {
    return cells[parseInt(x / 50)][parseInt(y / 50)];
}


// create a function which returns the cell at a given point
function getCell(x, y) {
    return cells[parseInt(x / 50)][parseInt(y / 50)];
}


// create a function which returns the cell at a given point
function getCell(x, y) {
    return cells[parseInt(x / 50)][parseInt(y / 50)];
}


