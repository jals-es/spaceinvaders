/** SPACE INVADERS **/
function Shot(dir,s_x = n_x+(image_nave.width/2)-10,s_y=n_y) {
    this.s_x = s_x;
    this.s_y = s_y-image_shot.height+10;
    this.sd_x = dir;
    this.sd_y = dir;
  }
var shots = []
var enemy_shots=[]
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
    for (let index = 0; index < enemy_shots.length; index++) {
        if (enemy_shots[index].s_y > 1920) {
            enemy_shots.splice(index,1)
        } else {
            enemy_shots[index]=move_enemyshot(enemy_shots[index])  
        }          
    }
}
function move_enemyshot(shot) {
    shot.s_y=shot.s_y-shot.sd_y
    check_enemyshot(shot);
    ctx.drawImage(image_shot, shot.s_x, shot.s_y);
    return shot;
}
function move_shot(shot) {
    shot.s_y=shot.s_y-shot.sd_y
    check_shot(shot);
    ctx.drawImage(image_shot, shot.s_x, shot.s_y);
    return shot;
}
function check_enemyshot(shot) {
    if (isBetween(shot)) {
        alert("lose")
    }
}
function enemy_shot(monster,vel) {
        enemy_shots.push(new Shot(-vel,monster.x+(monster.image.width/2)-10,monster.y+monster.image.height))

}
function check_shot(shot) {
    for (let index = 0; index < m01_positions.length; index++) {
        if (isBetween(shot,m01_positions[index])) {
            m01_positions.splice(index,1);
            break;
        }
    }
    for (let index = 0; index < m02_positions.length; index++) {
        if (isBetween(shot,m02_positions[index])) {
            m02_positions.splice(index,1);
            break;
        }
    }
    for (let index = 0; index < m03_positions.length; index++) {
        if (isBetween(shot,m03_positions[index])) {
            m03_positions.splice(index,1);
            break;
        }
    }
}
function s_moveUp(){
    if (shots.length == 0){
        shots.push(new Shot(10))
    }
}
function isBetween(shot,monster={
    x:n_x,
    y:n_y,
    image:image_nave
}) {

    monsterxstart = monster.x
    monsterxfinal = monster.x + monster.image.width

    monsterystart = monster.y
    monsteryfinal = monster.y + monster.image.height

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