/** SPACE INVADERS MONSTERS CONTROL **/
var image01_01 = new Image(canvas);
image01_01.src = 'assets/img/01_01.svg';
image01_01.width = 100;
image01_01.height = 60;

var image02_01 = new Image(canvas);
image02_01.src = 'assets/img/02_01.svg';
image02_01.width = 100;
image02_01.height = 75;

var image02_02 = new Image(canvas);
image02_02.src = 'assets/img/02_02.svg';
image02_02.width = 100;
image02_02.height = 75;

var image03_01 = new Image(canvas);
image03_01.src = 'assets/img/03_01.svg';
image03_01.width = 100;
image03_01.height = 80;

var image03_02 = new Image(canvas);
image03_02.src = 'assets/img/03_02.svg';
image03_02.width = 100;
image03_02.height = 80;

var image_boss = new Image(canvas);
image_boss.src = 'assets/img/boss_fight.svg';
image_boss.width = 380;
image_boss.height = 355;

var m01_positions = [];
var m02_positions = [];
var m03_positions = [];
var cant_monsters = 10;
var margin_m = 20;

function monster(x, y, image) {
    this.image = image;
    this.x = x;
    this.y = y;
};

function Boss(x, y, image) {
    this.image = image;
    this.x = x;
    this.y = y;
};

var first_time_m = true;
var seccond_time_m = false;
const start_x_m = canvas.width / 2;
const start_y_m = 70;

var dx_m = 1;

var count_seccond = 0;
var boss_show = false;

var boss = new Boss((canvas.width / 2) - (image_boss.width / 2), start_y_m, image_boss);
var dx_b = Math.random() < 0.5 ? -1 : 1;;
var dy_b = 1;
var live_boss = 1000;

function print_monsters() {
    if (!boss_show) {
        if (first_time_m) {
            first_time_m = false;
            print_monsters01_f();
            print_monsters02_f();
            print_monsters03_f();
        } else if (seccond_time_m) {
            check();
            print_monster01();
            print_monster02();
            print_monster03();
            count_seccond++;
        }

        if (count_seccond == 100) {
            count_seccond = 0;

            disparo1 = parseInt(Math.random() * (m01_positions.length - 0) + 0);
            if (m01_positions.length > 0) {
                enemy_shot(m01_positions[disparo1], parseInt(Math.random() * (15 - 5) + 5));
            }
            disparo2 = parseInt(Math.random() * (m02_positions.length - 0) + 0);
            disparo3 = parseInt(Math.random() * (m03_positions.length - 0) + 0);
            if (m03_positions.length > 0) {
                enemy_shot(m03_positions[disparo3], parseInt(Math.random() * (15 - 5) + 5));
            }
            for (let i = 0; i < m02_positions.length; i++) {

                if (m02_positions[i].image.src === image02_01.src) {
                    m02_positions[i].image = image02_02;
                    if (disparo2 == i) {
                        enemy_shot(m02_positions[i], parseInt(Math.random() * (15 - 5) + 5));
                    }
                } else {
                    m02_positions[i].image = image02_01;
                }

            }

            for (let i = 0; i < m03_positions.length; i++) {

                if (m03_positions[i].image.src === image03_01.src) {
                    m03_positions[i].image = image03_02;
                } else {
                    m03_positions[i].image = image03_01;
                }

            }

        } else if (count_seccond == 50) {
            for (let i = 0; i < m03_positions.length; i++) {
                if (m03_positions[i].image.src === image03_01.src) {
                    m03_positions[i].image = image03_02;
                } else {
                    m03_positions[i].image = image03_01;
                }

            }
            matar_all();
        }
    } else {
        print_boss();
    }

}

function matar_all() {
    boss_show = true;
    m01_positions = [];
    m02_positions = [];
    m03_positions = [];
}

function print_boss() {
    ctx.fillStyle = "red";
    ctx.fillText(live_boss, (canvas.width / 2) - 100, 50);

    ctx.drawImage(boss.image, boss.x, boss.y);

    boss.x += dx_b;
    boss.y += dy_b;

    check_boss_position();
}

function check_boss_position() {

    var h = Math.random() < 0.5 ? -1 : 1;
    rand_vel = (Math.random() * (2 - 1) + 1);

    if (boss.x < 0) {
        dx_b = dx_b * -1;

        dy_b = (dy_b + rand_vel) * h;
    }

    if (boss.y < 60) {
        dy_b = dy_b * -1;

        dx_b = (dx_b + rand_vel) * h;
    }

    if ((boss.x + boss.image.width) > canvas.width) {
        dx_b = dx_b * -1;

        dy_b = (dy_b * rand_vel) * h;
    }

    if ((boss.y + boss.image.height) > canvas.height - 300) {
        dy_b = dy_b * -1;

        dx_b = (dx_b * rand_vel) * h;
    }
}

function generarLetra() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

function colorHEX() {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return "#" + coolor;
}

function print_monsters01_f() {
    let posicion = (canvas.width / 2) - ((cant_monsters * (image01_01.width + margin_m)) / 2);
    let posicion_y = start_y_m;

    let posicion_first = posicion;

    for (let i = 0; i < cant_monsters; i++) {
        m01_positions[i] = new monster(posicion, posicion_y, image01_01);

        ctx.drawImage(m01_positions[i].image, m01_positions[i].x, m01_positions[i].y);

        if (posicion == (posicion_first + (cant_monsters * (image01_01.width + margin_m)) - (image01_01.width + margin_m))) {
            seccond_time_m = true;
        }

        posicion = posicion + image01_01.width + margin_m;
    }
}

function print_monsters02_f() {
    let posicion = (canvas.width / 2) - ((cant_monsters * (image02_01.width + margin_m)) / 2);
    let posicion_y = start_y_m + image01_01.height + margin_m;

    for (let i = 0; i < cant_monsters; i++) {
        m02_positions[i] = new monster(posicion, posicion_y, image02_01);

        ctx.drawImage(m02_positions[i].image, m02_positions[i].x, m02_positions[i].y);

        posicion = posicion + image02_01.width + margin_m;
    }
}

function print_monsters03_f() {
    let posicion = (canvas.width / 2) - ((cant_monsters * (image03_01.width + margin_m)) / 2);
    let posicion_y = start_y_m + image01_01.height + margin_m + image02_01.height + margin_m;

    for (let i = 0; i < cant_monsters; i++) {
        m03_positions[i] = new monster(posicion, posicion_y, image03_01);

        ctx.drawImage(m03_positions[i].image, m03_positions[i].x, m03_positions[i].y);

        posicion = posicion + image03_01.width + margin_m;
    }
}

function print_monster01() {
    for (let i = 0; i < m01_positions.length; i++) {

        ctx.drawImage(m01_positions[i].image, m01_positions[i].x, m01_positions[i].y);

        m01_positions[i].x += dx_m;
    }
}

function print_monster02() {
    for (let i = 0; i < m02_positions.length; i++) {

        ctx.drawImage(m02_positions[i].image, m02_positions[i].x, m02_positions[i].y);

        m02_positions[i].x += dx_m;
    }
}

function print_monster03() {
    for (let i = 0; i < m03_positions.length; i++) {

        ctx.drawImage(m03_positions[i].image, m03_positions[i].x, m03_positions[i].y);

        m03_positions[i].x += dx_m;
    }
}

function check() {
    check_baja = true;
    check_win = true;

    if (m01_positions.length > 0) {
        check_win = false;
        if (m01_positions[m01_positions.length - 1].x + image01_01.width == canvas.width) {
            dx_m = -1;
            if (check_baja) {
                baja(50);
                check_baja = false;
            }
        } else if (m01_positions[0].x == 0) {
            dx_m = 1;
            if (check_baja) {
                baja(50);
                check_baja = false;
            }
        } else if (m01_positions[m01_positions.length - 1].y >= n_y) {
            alert("DERROTA")
            location.reload();
            baja(-m01_positions[m01_positions.length - 1].y)
        }
    }

    if (m02_positions.length > 0) {
        check_win = false;
        if (m02_positions[m02_positions.length - 1].x + image02_01.width == canvas.width) {
            dx_m = -1;
            if (check_baja) {
                baja(50);
                check_baja = false;
            }
        } else if (m02_positions[0].x == 0) {
            dx_m = 1;
            if (check_baja) {
                baja(50);
                check_baja = false;
            }
        } else if (m02_positions[m02_positions.length - 1].y >= n_y) {
            alert("DERROTA")
            location.reload();
            baja(-m01_positions[m01_positions.length - 1].y)
        }
    }

    if (m03_positions.length > 0) {
        check_win = false;
        if (m03_positions[m03_positions.length - 1].x + image03_01.width == canvas.width) {
            dx_m = -1;
            if (check_baja) {
                baja(50);
                check_baja = false;
            }
        } else if (m03_positions[0].x == 0) {
            dx_m = 1;
            if (check_baja) {
                baja(50);
                check_baja = false;
            }
        } else if (m03_positions[m03_positions.length - 1].y >= n_y) {
            alert("DERROTA")
            location.reload();
            baja(-m01_positions[m01_positions.length - 1].y)
        }
    }

    if (check_win) {
        // alert("You win");
        // location.reload();
        boss_show = true;
    }
}

function baja(cant) {
    for (let i = 0; i < m01_positions.length; i++) {

        m01_positions[i].y += cant;
    }

    for (let i = 0; i < m02_positions.length; i++) {

        m02_positions[i].y += cant;
    }

    for (let i = 0; i < m03_positions.length; i++) {

        m03_positions[i].y += cant;
    }
}