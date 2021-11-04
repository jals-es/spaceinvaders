/** SPACE INVADERS **/
const canvas = document.getElementById("principal");
const ctx = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 1080;
// ctx.fillStyle = "blue";;

var score = 0;
var vidas = "";

var screen = 0;

function printAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "50px DotsAllForNow";

    switch (screen) {

        case 0:
            print_monsterFalling();
            print_score();
            print_monsters();
            print_nave();
            print_shot();
            print_vida();
            check_lose()
            break;
        case 1:
            print_lose();
            break;
        case 2:
            print_win();
            break;
    }
}

function print_score() {
    vidas = "";

    ctx.fillStyle = "red";

    for (let i = 0; i < vida; i++) {
        vidas += "\u2764";
    }

    ctx.fillText(vidas, 10, 50);


    ctx.fillStyle = "white";

    ctx.fillText("Score: " + score, 170, 50);
}

setInterval(printAll, 10);
setInterval(check_key, 10)
var map = {}; // You could also use an array
onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /* insert conditional here */
}

function check_key() {
    if (map[39]) {
        n_moveRight()
    }
    if (map[37]) {
        n_moveLeft()
    }

    // if (map[13]) {
    //     restart_game();
    // }

}

function getShot(e) {
    // console.log(e);

    var key_code = e.which || e.keyCode;
    // console.log(key_code);
    switch (key_code) {
        case 32: //Spacebar
            s_moveUp();


            break;
        case 13: //Enter
            restart_game();
            break;
    }
}

function check_lose() {
    if (vida <= 0) {
        screen = 1;
    }
}