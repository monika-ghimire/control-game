var canvas = document.getElementById('canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var z = 0.9
let move = z

height = canvas.height
width = canvas.width

const ctx = canvas.getContext('2d')
//food 

var blockSize = 100
var rows = 20
var col = 20
var foodX = 20
var foodY = 40
ctx.fillStyle = "#FF0000"

//snake
var x = 20
var y = 20
ctx.fillStyle = "green";
ctx.fillRect(x, y, 40, 40)

function placeFood() {
  foodX = Math.floor(Math.random() * col) * blockSize
  foodY = Math.floor(Math.random() * rows) * blockSize
  // foodX = Math.floor(Math.random() * T),
  // foodY= Math.floor(Math.random() * T), 
  ctx.fillRect(foodX, foodY, 40, 40)

}

var x_offset = 1
var y_offset = 0
function startLoop() {

  window.addEventListener('keyup', (e) => {

    switch (e.key) {
      case 'a':

        y_offset = 0;
        x_offset = -1

        break

      case 'd':

        x_offset = 1
        y_offset = 0
        break

      case 'w':

        y_offset = -1
        x_offset = 0
        break

      case 's':

        y_offset = 1
        x_offset = 0
        break
    }


  })

  requestAnimationFrame(startLoop);

  ctx.clearRect(0, 0, canvas.width, canvas.height,);

  ctx.fillRect(x, y, 40, 40)


  if (x > width) {
    x = 0;
  }
  if (x <= 0) {
    x = window.innerWidth - 10;
  }

  if (y> height) {
    y = 0;
  }
  if (y <= 0) {
    y = window.innerHeight - 10;
  }
  x = x + x_offset;
  y = y + y_offset;

  placeFood()
}

startLoop();


