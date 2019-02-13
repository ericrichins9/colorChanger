var colors = ['red', 'blue', 'green', 'orange', 'yellow', 'brown'];

for (var i = 0; i < colors.length; i++){
    addColors(colors[i]);       
}

function addColors(color) {
    var newOption = document.createElement('option');
    newOption.value = color;
    newOption.innerText = color;
    document.getElementById('color-options').appendChild(newOption);
}


