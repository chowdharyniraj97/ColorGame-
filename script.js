var colors = generate(6);
console.log(colors);
console.log("hey");
var squares = document.getElementsByClassName("square");
var pckcolor = pickcolor();
var msg = document.querySelector("#message");
var res = document.getElementById("res");
var h1 = document.querySelector("h1");

res.textContent = pckcolor;
//console.log(squares.length);
//console.log("hey");
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor);
    //console.log(ans.innerText);
    console.log(clickedColor + " " + pckcolor);

    if (clickedColor === pckcolor) {
      //console.log("DSSSSSSSSSSSSSSSSS");
      msg.textContent = "Correct";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickcolor(color) {
  var x = Math.floor(Math.random() * colors.length);
  //console.log(colors[x]);
  return colors[x];
}

function generate(nums) {
  arr = [];

  for (var i = 0; i < nums; i++) {
    arr.push(getthecolor());
  }
  return arr;
}
function getthecolor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
