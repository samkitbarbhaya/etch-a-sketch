const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#333333';
const DEFAULT_MODE = 'color';
const WHITE_COLOR = '#fefefe'

let paintMode = false;
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
colorBtn.onclick = () => currentMode = 'color'
rainbowBtn.onclick = () => currentMode = 'rainbow'
eraserBtn.onclick = () => currentMode='eraser'
clearBtn.onclick = () => reloadGrid(currentSize)

// Update the current slider value (each time you drag the slider handle)
slider.oninput = () => {
    currentSize = slider.value;
    reloadGrid(slider.value);
    gridSizeValueDiv.innerHTML = `${slider.value} x ${slider.value}`;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function colorGridElement(e) {
    if(!paintMode) return;
    if(currentMode == 'color'){
        e.srcElement.style.backgroundColor = currentColor;
    }else if(currentMode == 'eraser'){
        e.srcElement.style.backgroundColor = WHITE_COLOR;
    }else if(currentMode == 'rainbow'){
        e.srcElement.style.backgroundColor = generateRandomColor();
    }
}

function clearGrid(){
    grid.innerHTML = '';
}

function reloadGrid(size) {
    currentMode = 'color';
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
        gridElement.addEventListener('mousedown',() => {paintMode=true});
        gridElement.addEventListener('mousemove',colorGridElement);
        gridElement.addEventListener('mouseup',()=> {paintMode=false});
        grid.appendChild(gridElement);
    }
}

window.onload = () =>{
    setupGrid(DEFAULT_SIZE)
    gridSizeValueDiv.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`; // Display the default slider value
}