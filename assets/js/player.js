/** SPACE INVADERS **/
var image_nave = new Image(canvas);
image_nave.src = 'assets/img/navesvg.svg';
image_nave.width = 120;
image_nave.height = 85;
var n_x = (canvas.width/2)-(image_nave.width/2);
var n_y = (canvas.height-image_nave.height)-(canvas.height*0.03);
var nd_x = 15;
var nd_y = 0;
function print_nave(){
    // console.log(n_x);
    ctx.drawImage(image_nave, n_x, n_y);
}
function n_moveLeft(){
    if (n_x != 0){
        n_x = n_x - nd_x
    }
}
function n_moveRight(){
    if (n_x != canvas.width-image_nave.width){
        n_x = n_x + nd_x

    }
}

