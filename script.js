var slider = document.querySelector('#myRange');
var output = document.querySelector("#demo");
output.innerHTML = `${slider.value}x${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value}x${this.value}`;
}