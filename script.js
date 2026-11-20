const line = document.getElementById("line");

// Line ke styles
line.style.backgroundColor = "#000000";
line.style.width = "200px";
line.style.height = "2px";
line.style.position = "absolute";
line.style.top = "50%";
line.style.left = "50%";

let angle = 0; // global variable

setInterval(function () {
  angle += 2;
  line.style.transform = "rotate(" + angle + "deg)";
}, 20);