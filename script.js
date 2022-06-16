// The Odin Project: Etch A Sketch
// Alex Tresselt 6-14-22

// To Do:
// Add button to erase and chose new grid size
// Fix column div turning blue on child div mouseover
// Add random colors

// Draws the grid with the given number of squares per side.
function drawGrid(squaresPerSide) {

    var totalWidth = 960;
    var size = (totalWidth / squaresPerSide) + "px";
    const container = document.getElementById("container");

    for (i = 0; i < squaresPerSide; i++) {
        // create column
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('content');
        //columnDiv.textContent = " c" + i;
        columnDiv.justifyContent = "row";
        columnDiv.style.width = size;
        columnDiv.style.height = size;
        columnDiv.onmouseover = function() {
            columnDiv.style.backgroundColor = "blue";
        }
        container.appendChild(columnDiv);
        for (j = 0; j < squaresPerSide; j++) {
            // create row
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('content');
            //rowDiv.textContent = " r" + i;
            rowDiv.style.width = size;
            rowDiv.style.height = size;
            rowDiv.onmouseover = function() {
                rowDiv.style.backgroundColor = "red";
            }
            columnDiv.appendChild(rowDiv);
        }
    }
}

//Erases the grid and creates a new one with a size based on user
// input.
function redrawGrid(squaresPerSide) {
    // delete old grid
    drawGrid(squaresPerSide);
}

// Initialize page with a 16x16 grid
drawGrid(16);