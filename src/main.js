// make the button clickable and hello world appear

function clickMe() {
    myFunction();
    newFunction();
}


function newFunction() {
    console.log('hello world');
    const grid = document.getElementById('grid');
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const td = document.createElement('td');
            td.style.border = '1px solid black';
            td.style.width = '50px';
            td.style.height = '50px';
            tr.appendChild(td);
            
            // create a clickable text in each cell with some random text in it
            const text = document.createElement('p');
            text.innerHTML = 'Click Me';
            td.appendChild(text);
           
        }
        table.appendChild(tr);
    }
    grid.appendChild(table);
}


    



// function myFunction()  which on clicking create a hello world message
function myFunction() {
    // make the label appear and make it beautiful
    const label = document.getElementById('lbl');
    label.innerHTML = 'Hello World!';


}

// function changeColor() which on clicking change the color of the label
function changeColor() {
    // make the label appear and make it beautiful
    const label = document.getElementById('lbl');
    label.style.color = 'red';
}