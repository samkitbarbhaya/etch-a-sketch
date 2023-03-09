const DEFAULT_VALUE = 16;
const slider = document.querySelector('#size-slider');
const gridSizeValueDiv = document.querySelector("#size-value");
const grid = document.getElementById('grid');
const colorPicker = document.querySelector('#color-picker');
var colorMode = false;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => {
    clearGrid(slider.value)
    gridSizeValueDiv.innerHTML = `${slider.value} x ${slider.value}`;
}

function colorGridElement(e) {
    if(colorMode) e.srcElement.style.backgroundColor = colorPicker.value;
}

function clearGrid(){
    grid.innerHTML = '';
}

function reloadGrid(size) {
    clearGrid();
    setupGrid(size);
}

//This function sets the grid with the give size which is passed a parameter to the function
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size},auto)`;
    grid.style.gridTemplateRows = `repeat(${size},auto)`;
    for(var i=0; i < size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mousedown',() => {colorMode=true});
        gridElement.addEventListener('mousemove',colorGridElement);
        gridElement.addEventListener('mouseup',()=> {colorMode=false});
        grid.appendChild(gridElement);
    }
}

window.onload = () =>{
    setupGrid(slider.value)
    gridSizeValueDiv.innerHTML = `${DEFAULT_VALUE} x ${DEFAULT_VALUE}`; // Display the default slider value
}