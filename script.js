const DEFAULT_VALUE = 16;
const slider = document.querySelector('#size-slider');
const gridSizeValueDiv = document.querySelector("#size-value");
const grid = document.getElementById('grid')

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    gridSizeValueDiv.innerHTML = `${this.value} x ${this.value}`;
}

function setupGrid(size) {

}

window.onload = () =>{
    // setupGrid(slider.value)
    gridSizeValueDiv.innerHTML = `${DEFAULT_VALUE} x ${DEFAULT_VALUE}`; // Display the default slider value
}