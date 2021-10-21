/** SPACE INVADERS MONSTERS CONTROL **/
const start_x = 400;

var m1_x = start_x + 1;
var m1_y = 0;
var m2_x = start_x + 390;
var m2_y = 0;
var m3_x = start_x + (390 * 2);
var m3_y = 0;
var dx = 1;
var dy = 0;

var image01_01 = new Image(canvas);
image01_01.src = 'assets/img/01_01.svg';
image01_01.width = 390;
image01_01.height = 230;

console.log(image01_01.width);


function print_monsters() {
    if (m3_x + image01_01.width == canvas.width) {
        dx = -1;
        m1_y = m1_y + 50;
        m2_y = m2_y + 50;
        m3_y = m3_y + 50;
    } else if (m1_x == 0) {
        dx = 1;
        m1_y = m1_y + 50;
        m2_y = m2_y + 50;
        m3_y = m3_y + 50;
    } else if (m1_y + image01_01.height >= canvas.height) {
        alert("DERROTA")
    }
    print_monster01();
    print_monster02();
    print_monster03();

    // console.log(x)
}


function print_monster01() {

    ctx.drawImage(image01_01, m1_x, m1_y);

    m1_x += dx;
    m1_y += dy;
}

function print_monster02() {
    ctx.drawImage(image01_01, m2_x, m2_y);

    m2_x += dx;
    m2_y += dy;
}

function print_monster03() {

    ctx.drawImage(image01_01, m3_x, m3_y);

    m3_x += dx;
    m3_y += dy;
}


// print_monsters();