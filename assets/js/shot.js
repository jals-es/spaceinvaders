/** SPACE INVADERS **/
function Shot(dir) {
    this.s_x = n_x+(image_nave.width/2)-10;
    this.s_y = n_y-image_shot.height+10;
    this.sd_x = 15;
    this.sd_y = dir;
  }
var shots = []
var image_shot = new Image(canvas);
image_shot.src = 'assets/img/shotsvg.svg';
image_shot.width = 5;
image_shot.height = 30;
function print_shot(){
    for (let index = 0; index < shots.length; index++) {
        shots[index]=move_shot(shots[index])        
    }
}
function move_shot(shot) {
    shot.s_y=shot.s_y-shot.sd_y
    ctx.drawImage(image_shot, shot.s_x, shot.s_y);
    return shot;
}
function s_moveUp(){
    shots.push(new Shot(10))
}