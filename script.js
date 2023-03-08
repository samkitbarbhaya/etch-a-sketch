const DEFAULT_VALUE = 16;
const slider = document.querySelector('#size-slider');
const gridSizeValueDiv = document.querySelector("#size-value");
const grid = document.getElementById('grid')

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    setupGrid(slider.value)
    gridSizeValueDiv.innerHTML = `${this.value} x ${this.value}`;
}

//THis function sets the grid with the give size which is passed a parameter to the function
function setupGrid(size) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${size},auto)`;
    grid.style.gridTemplateRows = `repeat(${size},auto)`;
    for(var i=0;i<size*size;i++){
        var gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        grid.appendChild(gridElement)
    }
}

window.onload = () =>{
    setupGrid(slider.value)
    gridSizeValueDiv.innerHTML = `${DEFAULT_VALUE} x ${DEFAULT_VALUE}`; // Display the default slider value
}