/** SPACE INVADERS **/
var canvas = document.getElementById("principal")
ctx = canvas.getContext('2d');
var navepath = "M184.000 100.000 L 184.000 120.000 168.000 120.000 L 152.000 120.000 152.000 158.000 L 152.000 196.000 92.000 196.000 L 32.000 196.000 32.000 210.000 C 32.000 223.333,31.333 224.000,18.000 224.000 L 4.000 224.000 4.000 288.000 L 4.000 352.000 200.000 352.000 L 396.000 352.000 396.000 288.000 L 396.000 224.000 382.000 224.000 C 368.667 224.000,368.000 223.333,368.000 210.000 L 368.000 196.000 308.000 196.000 L 248.000 196.000 248.000 158.000 L 248.000 120.000 232.000 120.000 L 216.000 120.000 216.000 100.000 L 216.000 80.000 200.000 80.000 L 184.000 80.000 184.000 100.000"
var navepath2D = new Path2D(navepath)
ctx.fill(navepath2D)