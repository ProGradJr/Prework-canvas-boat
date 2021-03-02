var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.font = "16px Arial"
context.fillText("A sailor's joys are as simple as a child's.",5,20);
context.fill();

//water
var lGradient = context.createLinearGradient(0,0,400,0);
lGradient.addColorStop(0,"#0000FF");
lGradient.addColorStop(1,"#5F9AD1");

context.beginPath();
context.bezierCurveTo(0,270,350,350,400,290);
context.lineTo(400, 400);
context.lineTo(0,400);
context.closePath();
context.fillStyle=lGradient;
context.fill();

//Curvy left Sail
context.beginPath();
context.moveTo(145,145);
context.quadraticCurveTo(95,180,85,260);
context.quadraticCurveTo(105,250,145,260);
context.quadraticCurveTo(135,200,145,145);
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke();

//Triangle right sail
context.beginPath();
context.moveTo(165, 145);
context.lineTo(165, 260);
context.lineTo(225, 260);
context.closePath();
context.fill();
context.stroke();

//Sail text
context.beginPath();
context.font = "700 20px sans-serif";
context.strokeStyle = "blue";
context.strokeText("USA",167,250);
context.stroke();

//Flag
context.beginPath();
context.moveTo(145, 110);
context.lineTo(145, 140);
context.lineTo(110, 125);
context.closePath();
context.fillStyle = "#15960A";
context.strokeStyle = "#15960A";
context.fill();
context.stroke();  

// Boat Bottom
context.beginPath();
context.rect(70, 280, 170, 40);
context.fillStyle = "rgba(165, 42, 42, 1)";
context.strokeStyle = "rgba(165, 42, 42, 1)";
context.fill();
context.stroke();   

// Mast
context.beginPath();
context.rect(150, 100, 10, 180);
context.fillStyle = "black";
context.strokeStyle="black"
context.fill();
context.stroke();  

//circle

var mouseX = 330;
var mouseY = 70;

function drawSun(){
context.beginPath();
context.arc(mouseX,mouseY,45,0,2*Math.PI,true);

var rGradient = context.createRadialGradient(mouseX,mouseY,10,mouseX,mouseY,45);
rGradient.addColorStop(0,"#FF8C00");
rGradient.addColorStop(1,"#FFFF00");

context.fillStyle= rGradient;
context.strokeStyle="yellow";
context.fill();
context.stroke();
}

function getPosition(event){
    context.clearRect(mouseX-50,mouseY-50,100,100);
    mouseX = event.clientX-canvas.offsetLeft;
    mouseY = event.clientY-canvas.offsetTop;
    drawSun();
}

drawSun();

canvas.addEventListener("mousemove",getPosition,false);

//Birds
context.beginPath();
context.moveTo(50, 50);
context.quadraticCurveTo(70,70,80,50);
context.quadraticCurveTo(90,70,110,50);
context.strokeStyle="black";
context.stroke();

//Bird2
context.beginPath();
context.moveTo(80, 80);
context.quadraticCurveTo(100,100,110,80);
context.quadraticCurveTo(120,100,140,80);
context.strokeStyle="black";
context.stroke();