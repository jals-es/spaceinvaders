/** SPACE INVADERS **/
const canvas = document.getElementById("principal");
const ctx = canvas.getContext('2d');
canvas.width = screen.width;
canvas.height = screen.height;

function printAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print_monsters();
    print_nave();
    print_shot();
}

setInterval(printAll, 10);

function getKeyAndMove(e) {
    // console.log(e);

    var key_code = e.which || e.keyCode;
    // console.log(key_code);
    switch (key_code) {
        case 37: //left arrow key
            n_moveLeft();
            break;
        case 38: //Up arrow key
            // moveUp();
            break;
        case 39: //right arrow key
            n_moveRight();
            break;
        case 40: //down arrow key
            // moveDown();
            break;
        case 32: //Spacebar
            s_moveUp();


            break;
        case 13: //Enter
            break;
    }
} 