const canvas = document.getElementById("canvas");
var x = 16;
var y = 16;

//create a grid
function grid(x, y) {
  for (i=0; i < y; i++) {
  column = document.createElement('div');
  column.classList.add('column');
  canvas.appendChild(column);
    for (a=0; a < x; a++) {
      row = document.createElement('div');
      row.classList.add('row');
      row.setAttribute("id", `${i}.${a}`);
      column.appendChild(row); 
      }
}
}

grid(x,y);

canvas.addEventListener('mouseover', hoverInNormal);

//normal color
function normal(){
  canvas.addEventListener('mouseover', hoverInNormal);
  canvas.removeEventListener('mouseover', hoverInRgb);
  canvas.removeEventListener('mouseover', hoverInOpacity);
}

function hoverInNormal(event) {
  event.target.style.backgroundColor = 'black';
  event.target.setAttribute("class", "row");
}

//rgb color
function rgb(){
  canvas.addEventListener('mouseover', hoverInRgb);
  canvas.removeEventListener('mouseover', hoverInNormal);
  canvas.removeEventListener('mouseover', hoverInOpacity);
}

function hoverInRgb(event) {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  event.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  event.target.setAttribute("class", "row");
}

//opacity color
function opacity(){
  canvas.addEventListener('mouseover', hoverInOpacity);
  canvas.removeEventListener('mouseover', hoverInNormal);
  canvas.removeEventListener('mouseover', hoverInRgb);
}

function hoverInOpacity(event) {
  if (event.target.className === "row"){
    event.target.setAttribute("class", "row opacity1");
  } else if (event.target.className === "row opacity1") {
    event.target.setAttribute("class", "row opacity2");
  } else if (event.target.className === "row opacity2") {
    event.target.setAttribute("class", "row opacity3");
  } else if (event.target.className === "row opacity3") {
    event.target.setAttribute("class", "row opacity4");
  } else if (event.target.className === "row opacity4") {
    event.target.setAttribute("class", "row opacity5");
  } else if (event.target.className === "row opacity5") {
    event.target.setAttribute("class", "row opacity6");
  } else if (event.target.className === "row opacity6") {
    event.target.setAttribute("class", "row opacity7");
  } else if (event.target.className === "row opacity7") {
    event.target.setAttribute("class", "row opacity8");
  } else if (event.target.className === "row opacity8") {
    event.target.setAttribute("class", "row opacity9");
  } else if (event.target.className === "row opacity9") {
    event.target.setAttribute("class", "row opacity10");
  }
}

//change grid
function input() {
  let inputGrid = prompt("How many grid x grid?");
  if (inputGrid <= 100 && inputGrid >0) {
    canvas.innerHTML = '';
    x = inputGrid;
    y = inputGrid;
    grid(x, y);
  } else {
    console.log("error");
  }
}