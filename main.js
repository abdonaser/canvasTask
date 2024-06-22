//'1- First Task=======================================================
const canvas = document.getElementById("myCanvas1");
const context1 = canvas.getContext("2d");

const linearGradient = context1.createLinearGradient(0, 0, 0, 150);
linearGradient.addColorStop(0, "blue");
linearGradient.addColorStop(1, "white");
context1.fillStyle = linearGradient;
context1.fillRect(0, 0, 300, 150);

var linearGradient2 = context1.createLinearGradient(0, 150, 0, 300);
linearGradient2.addColorStop(0, "green");
linearGradient2.addColorStop(1, "white");
context1.fillStyle = linearGradient2;
context1.fillRect(0, 150, 300, 150);

context1.lineWidth = 4;
context1.beginPath();
context1.moveTo(100, 170);
context1.lineTo(100, 100);
context1.lineTo(200, 100);
context1.lineTo(200, 170);
context1.strokeStyle = "balck";
context1.stroke();

//'2-second Task===============================================================================
var canvas2 = document.getElementById("myCanvas2");
const context2 = canvas2.getContext("2d");
context2.lineWidth = 2;
context2.beginPath();
const radialGradient = context2.createRadialGradient(150, 150, 75, 175, 10, 65);
radialGradient.addColorStop(0, "#6b87d8");
radialGradient.addColorStop(1, "#0a2267");

context2.arc(150, 150, 75, 0, 2 * Math.PI, false);

context2.fillStyle = radialGradient;
context2.fill();
context2.closePath();
//' second
context2.beginPath();
context2.arc(150, 150, 60, 0, 2 * Math.PI, false);
const radialGradient2 = context2.createRadialGradient(
  90,
  90,
  150,
  150,
  150,
  10
);
radialGradient2.addColorStop(0, "#0a42e4");
radialGradient2.addColorStop(1, "#6f90ee");
context2.fillStyle = radialGradient2;
context2.fill();
context2.closePath();

context2.font = "80px Arial";
context2.fillStyle = "white";
context2.textAlign = "center";
context2.textBaseline = "middle";
context2.fillText("N", 150, 150);

//'3-third Task==================================================================================
var canvas3 = document.getElementById("myCanvas3");
var context3 = canvas3.getContext("2d");

context3.moveTo(75, 175);

context3.lineTo(175, 175);
context3.lineTo(175, 50);

context3.closePath();
context3.strokeStyle = "red";
context3.stroke();

context3.font = "18px Arial";
context3.fillStyle = "black";
context3.fillText("c", 100, 120);

context3.font = "18px Arial";
context3.fillStyle = "black";
context3.fillText("b", 180, 125);

context3.font = "18px Arial";
context3.fillStyle = "black";
context3.fillText("a", 120, 190);
