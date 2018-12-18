// When size is submitted by the user, call makeGrid()
var sumbited = document.getElementById('sumbited');
// sumbited event listener
sumbited.addEventListener('click',function(e){
e.preventDefault();
// call draw tabel func .
makeGrid();
});
/**
 This function call when user press sumbit button .
 */
function makeGrid() {
// Select size input
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
// select table
const table = document.getElementById('pixelCanvas');
//remove old table then create new one .
table.innerHTML = "";
// create inner loops to draw row and column .
for(var i = 0 ; i <= height; i++){
  // create a new row .
  var tableRow = document.createElement("tr");
  for (var j = 0; j < width; j++) {
    // create new column in each rows.
    var tableCell = document.createElement("td");
    tableRow.appendChild(tableCell);
  }// End inner for loop .
// add row and cell in each round .
var cell = table.appendChild(tableRow);
// add listenr to each cell.
cell.addEventListener('click',function(e){
// Select color input
var color = document.getElementById('colorPicker').value;
e.target.style.backgroundColor = color ;
});
}; // end main loop.
}
