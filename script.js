const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';

let colorMode = false;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode){
    currentMode = newMode;
}

const colorPicker = document.querySelector('#color-picker');
const colorBtn = document.querySelector('#color-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const clearBtn = document.querySelector('#clear-btn');
const gridSizeValueDiv = document.querySelector("#size-value");
const slider = document.querySelector('#size-slider');
const grid = document.getElementById('grid');

colorPicker.oninput = (e) => setCurrentColor(e.target.value)


clearBtn.onclick = () => {reloadGrid(currentSize)}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => {
    currentSize = slider.value;
    clearGrid(slider.value)
    gridSizeValueDiv.innerHTML = `${slider.value} x ${slider.value}`;
}

function colorGridElement(e) {
    if(colorMode) e.srcElement.style.backgroundColor = currentColor;
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
    setupGrid(DEFAULT_SIZE)
    gridSizeValueDiv.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`; // Display the default slider value
}