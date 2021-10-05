const canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//rect
// ctx.fillRect(100,100,100,100)

//line
// ctx.beginPath()
// ctx.moveTo(50,500)
// ctx.lineTo(300,100)
// ctx.lineTo(400,500)
// ctx.lineTo(50,200)
// ctx.lineTo(500,200)
// ctx.lineTo(50,500)
// ctx.strokeStyle = "red"
// ctx.stroke()

//circle
// ctx.beginPath()
// ctx.arc(300,300,100,0,Math.PI*2)
// ctx.stroke()

// for (let i = 0; i < 15;i++){
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight
//     ctx.beginPath()
//     ctx.arc(x,y,100,0,Math.PI*2)
//     let color = '#'+Math.floor(100000 + Math.random() * 900000)
//     ctx.strokeStyle = color
//     ctx.stroke()
//  }
// var x = 200;

var obj = {
   x:undefined,
   y:undefined
}
window.addEventListener("mousemove",function (event) {
this.obj.x = event.x
this.obj.y = event.y
console.log(obj)
})
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = "#" + Math.floor(100000 + Math.random() * 900000)

  this.drawCircle = function () {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
   //  let color = "#" + Math.floor(100000 + Math.random() * 900000);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.stroke()
  };

  this.updateCircle = function () {
    if (x + radius > innerWidth || x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
      dy = -dy;
    }
    x += dx;
    y += dy;
    if(obj.x - this.x <50 || obj.x - this.x >-50 || obj.xy - this.y <50 || obj.y - this.y>-50 ){
      this.radius+=1
    }else if(this.radius>2){
      this.radius -=1
    }
    this.drawCircle();
  };
}
let balls = [];
for (var i = 0; i < 150; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var dx = Math.random() * 5;
  var dy = Math.random() * 5;
  var radius = Math.random() * 50;
  balls.push(new Circle(x, y, dx, dy, radius));
}
function animateCircle() {
  requestAnimationFrame(animateCircle);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < balls.length; i++) {
    balls[i].updateCircle();
  }
}
animateCircle();
