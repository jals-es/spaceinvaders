/** SPACE INVADERS MONSTERS CONTROL **/
var image01_01 = new Image(canvas);
image01_01.src = 'assets/img/01_01.svg';
image01_01.width = 100;
image01_01.height = 60;

var m01_positions = [];

function m01(x) {
    this.image01 = image01_01;
    this.x = x;
    this.y = 0;
};

var cant_monsters = 10;

var first_time_m = true;
var seccond_time_m = false;
const start_x_m = canvas.width / 2;

// var m1_x = start_x + 1;
// var m1_y = 0;
// var m2_x = start_x + image01_01.width;
// var m2_y = 0;
// var m3_x = start_x + (image01_01.width * 2);
// var m3_y = 0;
var dx_m = 1;


function print_monsters() {
    if (first_time_m) {
        first_time_m = false;
        print_monsters01_f();
    } else if (seccond_time_m) {
        check();
        print_monster01();
    }

}

function print_monsters01_f() {
    let posicion = (canvas.width / 2) - ((cant_monsters * (image01_01.width + 20)) / 2);

    let posicion_first = posicion;
    // console.log(posicion);

    for (let i = 0; i < cant_monsters; i++) {
        // console.log(posicion);
        m01_positions[i] = new m01(posicion);

        ctx.drawImage(m01_positions[i].image01, m01_positions[i].x, m01_positions[i].y);

        // console.log(posicion);
        // console.log(posicion_first + (cant_monsters * m01.image01.width) - m01.image01.width);
        if (posicion == (posicion_first + (cant_monsters * (image01_01.width + 20)) - (image01_01.width + 20))) {
            seccond_time_m = true;
            console.log("entra")
        }

        posicion = posicion + image01_01.width + 20;
    }
    console.log(m01_positions[3].x);
    console.log(m01_positions);
}

function print_monster01() {
    for (let i = 0; i < m01_positions.length; i++) {

        ctx.drawImage(m01_positions[i].image01, m01_positions[i].x, m01_positions[i].y);

        m01_positions[i].x += dx_m;
    }
}

function check() {
    if (m01_positions[m01_positions.length - 1].x + image01_01.width == canvas.width) {
        dx_m = -1;
        baja(50);
    } else if (m01_positions[0].x == 0) {
        dx_m = 1;
        baja(50);
    } else if (m01_positions[m01_positions.length - 1].y >= n_y) {
        alert("DERROTA")
    }
}

function baja(cant) {
    for (let i = 0; i < m01_positions.length; i++) {

        m01_positions[i].y += cant;
    }
}