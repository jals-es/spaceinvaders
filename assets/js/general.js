/** SPACE INVADERS **/
const canvas = document.getElementById("principal");
const ctx = canvas.getContext('2d');
ctx.font = "1000px DotsAllForNow";
canvas.width = screen.width;
canvas.height = screen.height;

var score = 0;

function printAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print_score();
    print_monsters();
    print_nave();
    print_shot();
}

function print_score() {
    ctx.fillText("Score: " + score, 10, 20);
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
            break;
    }
}