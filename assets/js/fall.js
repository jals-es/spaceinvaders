monsterFalling = []



function print_monsterFalling() {
    for (let index = 0; index < monsterFalling.length; index++) {
        move_monsterFalling(monsterFalling[index]);
    }
}
function move_monsterFalling(monsterFallingActual) {
    if (monsterFallingActual.y < canvas.height) {
        monsterFallingActual.y = monsterFallingActual.y + 7
        check_monsterFalling(monsterFallingActual);
        ctx.drawImage(monsterFallingActual.image, monsterFallingActual.x, monsterFallingActual.y);
    }
}
function check_monsterFalling(monsterFallingActual) {
    if (isBetweenMonsterFallingActual(monsterFallingActual)) {
        vida--
        monsterFalling = []
        // var elementPos = monsterFalling.map(function (x) {
        //     return x.uuid;
        // }).indexOf(monsterFalling.uuid);
        monsterFalling.splice(elementPos, 1)
    }
}
function isBetweenMonsterFallingActual(monsterFallingActual) {

    monsterFallingActualxstart = monsterFallingActual.x
    monsterFallingActualxfinal = monsterFallingActual.x + monsterFallingActual.image.width

    monsterFallingActualystart = monsterFallingActual.y
    monsterFallingActualyfinal = monsterFallingActual.y + monsterFallingActual.image.height

    navexstart = n_x
    navexfinal = n_x + image_nave.width

    monsterFallingActualystart = monsterFallingActual.y
    monsterFallingActualyfinal = monsterFallingActual.y + monsterFallingActual.image.height
    // console.log(navexstart + " " + monsterFallingActualxstart + " " + navexfinal);
    if ((navexstart < monsterFallingActualxstart && monsterFallingActualxstart < navexfinal) || (navexstart < monsterFallingActualxfinal && monsterFallingActualxfinal < navexfinal)) {
        // console.log("Nx: " + navexstart + " Ny: " + n_y + " Vxs: " + monsterFallingActualxstart + " Vxf: " + monsterFallingActualxfinal);
        if (n_y < monsterFallingActualyfinal) {
            return true
        }
    }
    return false
}