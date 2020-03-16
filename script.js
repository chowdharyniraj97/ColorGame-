var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
console.log("hey");
var squares = document.getElementsByClassName("square");
var pckcolor = pickcolor();
var msg = document.querySelector("#message");
var res = document.getElementById("res");
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
