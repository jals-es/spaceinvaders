/** SPACE INVADERS **/

vida = 3

function Shot(dir, s_x = n_x + (image_nave.width / 2) - 10, s_y = n_y, sd_x = 0) {
    this.s_x = s_x;
    this.s_y = s_y - image_shot.height + 10;
    this.sd_x = sd_x;
    this.sd_y = dir;
    this.uuid = uuidv4()
}
var shots = []
var enemy_shots = []
var bangs = []
var image_shot = new Image(canvas);
var image_boom = new Image(canvas)
image_shot.src = 'assets/img/shotsvg.svg';
image_shot.width = 5;
image_shot.height = 20;
image_boom.src = 'assets/img/Bang.svg'

function print_shot() {
    for (let index = 0; index < bangs.length; index++) {
        // console.log("asdasd");
        if (bangs[index].time > 0) {
            // console.log("asda");
            ctx.drawImage(image_boom, bangs[index].x, bangs[index].y)
            bangs[index].time = bangs[index].time - 1
        }
    }
    for (let index = 0; index < shots.length; index++) {
        if (shots[index].s_y < 0) {
            shots.splice(index, 1)
        } else {
            shots[index] = move_shot(shots[index])
        }
    }
    for (let index = 0; index < enemy_shots.length; index++) {
        if (enemy_shots[index].s_y > 1920) {
            enemy_shots.splice(index, 1)
        } else {
            enemy_shots[index] = move_enemyshot(enemy_shots[index])
        }
    }
}

function move_enemyshot(shot) {
    shot.s_y = shot.s_y - shot.sd_y
    shot.s_x = shot.s_x + shot.sd_x
    if (shot.y < canvas.height) {
        var elementPos = enemy_shots.map(function(x) {
            return x.uuid;
        }).indexOf(shot.uuid);
        enemy_shots.splice(elementPos, 1)
    } else {
        check_enemyshot(shot);
        ctx.drawImage(image_shot, shot.s_x, shot.s_y);
    }
    return shot;
}

function move_shot(shot) {
    shot.s_y = shot.s_y - shot.sd_y
    check_shot(shot);
    ctx.drawImage(image_shot, shot.s_x, shot.s_y);
    return shot;
}

function check_enemyshot(shot) {
    if (isBetween(shot)) {
        enemy_shots = []
        n_x = (canvas.width / 2) - (image_nave.width / 2);
        n_y = (canvas.height - image_nave.height) - (canvas.height * 0.03);
        var elementPos = enemy_shots.map(function(x) {
            return x.uuid;
        }).indexOf(shot.uuid);
        enemy_shots.splice(elementPos, 1)
        console.log(enemy_shots)

        vida = vida - 1
        if (vida == 0) {
            // alert("lose")
            screen = 1;
        }
    }
}

function enemy_shot(monster, vel, dir, num = 1) {

    enemy_shots.push(new Shot(-vel, monster.x + (monster.image.width / 2) - 10, monster.y + monster.image.height, dir))

}

function check_shot(shot) {
    if (!boss_show) {
        for (let index = 0; index < m01_positions.length; index++) {
            if (isBetween(shot, m01_positions[index])) {
                monsterFalling.push(m01_positions[index])
                bangs.push({
                    x: m01_positions[index].x,
                    y: m01_positions[index].y,
                    time: 10
                })
                m01_positions.splice(index, 1);
                score += 100;
                break;
            }
        }
        for (let index = 0; index < m02_positions.length; index++) {
            if (isBetween(shot, m02_positions[index])) {
                monsterFalling.push(m02_positions[index])
                bangs.push({
                    x: m02_positions[index].x,
                    y: m02_positions[index].y,
                    time: 10
                })

                m02_positions.splice(index, 1);
                score += 50;
                break;
            }
        }
        for (let index = 0; index < m03_positions.length; index++) {
            if (isBetween(shot, m03_positions[index])) {
                monsterFalling.push(m03_positions[index])
                bangs.push({
                    x: m03_positions[index].x,
                    y: m03_positions[index].y,
                    time: 10
                })
                m03_positions.splice(index, 1);
                score += 25;
                break;
            }
        }
    } else {
        if (isBetween(shot, boss)) {
            shots = []
            if (score >= 3500) {
                score += 100
            } else {
                score += 50
            }
            live_boss--
        }
    }
}

function s_moveUp() {
    if (shots.length == 0) {
        shots.push(new Shot(10))
    }
}

function isBetween(shot, monster = {
    x: n_x,
    y: n_y,
    image: image_nave
}) {

    monsterxstart = monster.x
    monsterxfinal = monster.x + monster.image.width

    monsterystart = monster.y
    monsteryfinal = monster.y + monster.image.height

    if (monsterxstart < shot.s_x && shot.s_x < monsterxfinal) {
        if (monsterystart < shot.s_y && shot.s_y < monsteryfinal) {
            console.log("Y: M-Start: " + monsterystart + " M-Final: " + monsteryfinal + " Shot Y: " + shot.s_y);
            console.log("X: M-Start: " + monsterxstart + " M-Final: " + monsterxfinal + " Shot X: " + shot.s_x);
            shots = []
            return true
        }
    }
    return false
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}