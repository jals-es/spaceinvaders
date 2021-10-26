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
        if (shots[index].s_y < 0) {
            shots.splice(index,1)
        } else {
            shots[index]=move_shot(shots[index])  
        }      
    }
}
function move_shot(shot) {
    shot.s_y=shot.s_y-shot.sd_y
    check_shot(shot);
    ctx.drawImage(image_shot, shot.s_x, shot.s_y);
    return shot;
}
function check_shot(shot) {
    for (let index = 0; index < m01_positions.length; index++) {
        if (isBetween(shot,m01_positions[index])) {
            m01_positions.splice(index,1);
            break;
        }
    }
}
function s_moveUp(){
    if (shots.length == 0){
        shots.push(new Shot(10))
    }
}
function isBetween(shot,monster) {

    monsterxstart = monster.x
    monsterxfinal = monster.x + monster.image01.width

    monsterystart = monster.y
    monsteryfinal = monster.y + monster.image01.height

    // console.log(monsterystart +" - "+ monsteryfinal + "|||" + shot.x);
    if (monsterxstart < shot.s_x && shot.s_x < monsterxfinal) {
        if (monsterystart < shot.s_y && shot.s_y < monsteryfinal) {
            console.log("Y: M-Start: "+monsterystart+" M-Final: "+monsteryfinal + " Shot Y: "+ shot.s_y);
            console.log("X: M-Start: "+monsterxstart+" M-Final: "+monsterxfinal + " Shot X: "+ shot.s_x);
            shots = []
            return true
        }
    }
    return false
}